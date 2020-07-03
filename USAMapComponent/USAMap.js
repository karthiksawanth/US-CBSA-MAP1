import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import ReactTooltip from 'react-tooltip';
import ToolTipTable from '../TooltipTableComponent/ToolipTable'

// const geoUrl = "https://cdn.rawgit.com/anneching/bb4982bbc63966e63bdd/raw/87b1986b1b9e0a9547fbb60b4c609932f6ddc148/cbsa_us_2014_ex_hi_ak.json";
const CBSA_TOPO_JSON = require('./cbsa.json');

const colorScale = scaleQuantize()
  .domain([1, 150])
  .range(['#ed7513',
  '#fcb474',
  '#FFCC99',
  '#FFA54F',
  '#EE7621',
  '#FF6600',
  '#CD3700',
  '#F79862',
  'rgb(251,206,177)']);

  const getRandomInt = () => {
    return parseInt(Math.random() * 100);
  };
  

  const geographyStyle = {
    default: {
      outline: '#000000'
    },
    hover: {
      fill: '#ccc',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };

const getDataInstance = ()=> { return [
      { id: '47920', state: 'Washington Court House, OH', value: 67 },
      { id: '28500', state: 'Kerrville, TX', value: 3 },
      { id: '22800', state: 'Fort Madison-Keokuk, IA-IL-MO', value: 110 },
      { id: '22380', state: 'Flagstaff, AZ', value: 25 },
      { id: '47340', state: 'Wabash, IN', value: 87 },
      { id: '43300', state: 'Sherman-Denison, TX', value: 15 },
      { id: '10660', state: 'Albert Lea, MN', value: 50 },
      { id: '15660', state: 'Calhoun, GA', value: 43 },
      { id: '32700', state: 'McPherson, KS', value: 54},
      { id: '34780', state: 'Muskogee, OK', value: getRandomInt() },
      { id: '29620', state: 'Lansing-East Lansing, MI', value: 3 },
      { id: '38220', state: 'Pine Bluff, AR', value: getRandomInt() },
      { id: '18820', state: 'Crawfordsville, IN', value: 25 },
      { id: '43460', state: 'Sikeston, MO', value: getRandomInt() },
      { id: '34900', state: 'Napa, CA', value: 15 },
      { id: '35260', state: 'New Castle, PA', value: 50 },
      { id: '11380', state: 'Andrews, TX', value: 43 },
      { id: '43100', state: 'Sheboygan, WI', value: getRandomInt()},
      { id: '44620', state: 'Stevens Point, WI', value: getRandomInt() },
      { id: '23300', state: 'Freeport, IL', value: 3 },
      { id: '10100', state: 'Aberdeen, SD', value: getRandomInt() },
      { id: '19260', state: 'Danville, VA', value: 25 },
      { id: '26980', state: 'Iowa City, IA', value: getRandomInt() },
      { id: '19220', state: 'Danville, KY', value: 15 },
      { id: '37420', state: 'Pampa, TX', value: getRandomInt() },
      { id: '34260', state: 'Mountain Home, AR', value: getRandomInt() },
      { id: '47420', state: 'Wahpeton, ND-MN', value: getRandomInt()},
      { id: '41660', state: 'San Angelo, TX', value: getRandomInt() },
      { id: '32260', state: 'Marshalltown, IA', value: 3 },
      { id: '14340', state: 'Boone, IA', value: getRandomInt() },
      { id: '35500', state: 'Newton, IA', value: 25 },
      { id: '11900', state: 'Athens, OH', value: getRandomInt() },
      { id: '46620', state: 'Uvalde, TX', value: 15 },
      { id: '28340', state: 'Kendallville, IN', value: getRandomInt() },
      { id: '32280', state: 'Martin, TN', value: getRandomInt() },
      { id: '49220', state: 'Wisconsin Rapids-Marshfield, WI', value: getRandomInt()},
      { id: '20340', state: 'Duncan, OK', value: getRandomInt() },
      { id: '37340', state: 'Palm Bay-Melbourne-Titusville, FL', value: 3 },
      { id: '28380', state: 'Kennett, MO', value: getRandomInt() },
      { id: '16380', state: 'Celina, OH', value: 25 },
      { id: '11780', state: 'Ashtabula, OH', value: getRandomInt() },
      { id: '27160', state: 'Jackson, OH', value: 15 },
      { id: '30420', state: 'Lexington, NE', value: getRandomInt() },
      { id: '19980', state: 'Dodge City, KS', value: getRandomInt() },
      { id: '31540', state: 'Madison, WI', value: getRandomInt()},
      { id: '15620', state: 'Cadillac, MI', value: getRandomInt() },
      { id: '48220', state: 'Weatherford, OK', value: 3 },
      { id: '31580', state: 'Madisonville, KY', value: getRandomInt() },
      { id: '21120', state: 'Elk City, OK', value: 25 },
      { id: '22060', state: 'Faribault-Northfield, MN', value: getRandomInt() },
      { id: '34640', state: 'Olean, NY', value: 15 },
      { id: '26960', state: 'Ionia, MI', value: getRandomInt() },
      { id: '38260', state: 'Pittsburg, KS', value: getRandomInt() },
      { id: '13720', state: 'Big Stone Gap, VA', value: getRandomInt()},
  ] }

function MapChart (){
const [tooltipContent, setTooltipContent] = useState('');
  const [data,setData] = useState(getDataInstance());
 
  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    return () => {
    console.log(geo.properties.NAME)
      
    //   setTooltipContent(geo.properties.NAME);
    setTooltipContent(<ToolTipTable 
    stateName={geo.properties.NAME}/>)
     
    };
   
  };


  const onMouseLeave = () => {
    setTooltipContent('');
  };

  return (
    <div>
    <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap projection="geoAlbersUsa"
      data-tip="">
        <Geographies geography={CBSA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map(geo => {
              const cur = data.find(s => s.id === geo.properties.GEOID);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(cur ? cur.value : "#FF6347")}
                  onMouseEnter={onMouseEnter(geo, cur)}
                onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>

  );
};

export default MapChart;