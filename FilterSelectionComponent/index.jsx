import React, { useState, useEffect } from 'react';
import Dropdown from "./dropdown";
import USAMapStates from "../USAMapComponent/USAStates";
import MapChart from "../USAMapComponent/USAMap";
import './FilterSelection.css';
function FilterSelectionComponent() {
    let [toggleId, setToggle] = useState(true);
    let [selectedButton, setFilter] = useState("population");
    let dropdownOptions = ["Top 5", "Top 10", "Top 15"];
    let [selectedValue, setSelectedValue] = useState("Top 15");
    const setDropdownSelectedValue = (e) => {
        let selectedValue = e.currentTarget.getAttribute("data-value");
        setSelectedValue(selectedValue);
    }
    return (<div className="map-filter-container">
        <div className="map-container">
            {toggleId && <USAMapStates/>}
            {!toggleId && <MapChart/>}
        </div>
        <div className="filter-container">
            <div className="filter-heading-container">
                <div className="filter-heading">
                    FILTERS
            </div>
                <div className="reset-heading">
                    RESET
            </div>
            </div>
            <div className="filter-body">
                <div className="toggle-switch">
                    <span className={"toggle-label " + (toggleId === true ? "active" : "")}>State</span>
                    <div className="toggle-bar" onClick={() => setToggle(!toggleId)}>
                        <div className={"toggle-circle " + (toggleId === true ? "active" : "")}  >

                        </div>
                        <div className={"toggle-circle " + (toggleId === false ? "active" : "")}>

                        </div>
                    </div>
                    <span className={"toggle-label " + (toggleId === false ? "active" : "")}>CBSA</span>
                </div>
                <div className="fliter-button-container">
                    <div className="filter-button dropdown">
                        <Dropdown
                            dropdownselectedValue={selectedValue}
                            options={dropdownOptions}
                            setDropdownSelectedValue={setDropdownSelectedValue}
                        />
                    </div>
                    <div className={"filter-button " + (selectedButton === "population" ? "active" : "")} onClick={() => setFilter("population")} id="population">
                        Population Size
                </div>
                    <div className={"filter-button " + (selectedButton === "risk" ? "active" : "")} onClick={() => setFilter("risk")} id="risk">
                        Financial Risk Score
                </div>
                    <div className="filter-button-risk-container">
                        <h6>Risk Adjusted PMPM</h6>
                        <div className="filter-button-risk">
                            <div className={"filter-button " + (selectedButton === "total" ? "active" : "")} onClick={() => setFilter("total")} id="total">
                                Total
                    </div>
                            <div className={"filter-button " + (selectedButton === "med" ? "active" : "")} onClick={() => setFilter("med")} id="med">
                                Med
                    </div>
                            <div className={"filter-button " + (selectedButton === "rex" ? "active" : "")} onClick={() => setFilter("rex")} id="rex">
                                Rx
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default FilterSelectionComponent;