import "./Filters.css";
import { useFilter } from "../Filters/FilterContext";
import { useState } from "react";
import { availabilityData, locationData, propertyTypeData, initialState } from "../Constants/propertyHelperData";

export default function Filters() {

    const { dispatch } = useFilter();

    const [filterState, setFilterState] = useState(initialState);

    return <div className="filter-div">

        <div className="filter-select-div">
            <p>Location</p>

            <select
                value={filterState.location}
                onChange={(e) => {
                    setFilterState({ ...filterState, location: e.target.value })
                    dispatch({ type: "LOCATION", payload: e.target.value })
                }}
            >
                <option value={initialState.location}>{initialState.location}</option>
                <option value={locationData.delhi}>{locationData.delhi}</option>
                <option value={locationData.mumbai}>{locationData.mumbai}</option>
                <option value={locationData.bangalore}>{locationData.bangalore}</option>
                <option value={locationData.hyderabad}>{locationData.hyderabad}</option>
            </select>

        </div>


        <div className="filter-select-div">
            <p>Rent</p>

            <select
                value={filterState.rent}
                onChange={(e) => {
                    setFilterState({ ...filterState, rent: Number(e.target.value) });
                    dispatch({ type: "RENT", payload: Number(e.target.value) })
                }}
            >
                <option value={initialState.rent}>Any</option>
                <option value="5000">₹0 - ₹5,000</option>
                <option value="10000">₹5,000 - ₹10,000</option>
                <option value="20000">₹10,000 - ₹20,000</option>
                <option value="20001">₹20,000 & Above</option>
            </select>
        </div>


        <div className="filter-select-div">
            <p>Property Type</p>

            <select
                value={filterState.propertyType}
                onChange={(e) => {
                    setFilterState({ ...filterState, propertyType: e.target.value })
                    dispatch({ type: "PROPERTY_TYPE", payload: e.target.value })
                }}
            >
                <option value={initialState.propertyType}>Any</option>
                <option value={propertyTypeData.studio}>Studio</option>
                <option value={propertyTypeData.apartment}>Apartment</option>
                <option value={propertyTypeData.floor}>Independent Floor</option>
                <option value={propertyTypeData.house}>Independent House</option>
            </select>

        </div>

        <div className="filter-select-div">
            <p>Availability</p>

            <select
                value={filterState.availability}
                onChange={(e) => {
                    setFilterState({ ...filterState, availability: e.target.value })
                    dispatch({ type: "AVAILABILITY", payload: e.target.value })
                }}
            >
                <option value={initialState.availability}>Any</option>
                <option value={availabilityData.immediately}>Immediately</option>
                <option value={availabilityData.within1month}>Within 1 Month</option>
                <option value={availabilityData.within3months}>Within 3 Months</option>
                <option value={availabilityData.after3months}>After 3 Months</option>
            </select>

        </div>

        <button className="reset-filter-button" onClick={() => {dispatch({type: "RESET"}); setFilterState(initialState)}}> Reset Filters</button>

    </div>
}