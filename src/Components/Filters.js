import { useFilter } from "../Filters/FilterContext";
import { useState } from "react";
import { availabilityData, locationData, propertyTypeData, initialState } from "../Constants/propertyHelperData";

export default function Filters() {

    const { dispatch } = useFilter();

    const [filterState, setFilterState] = useState(initialState);

    return <div>

        <select
            value={filterState.rent}
            onChange={(e) => {
                setFilterState({ ...filterState, rent: Number(e.target.value) });
                dispatch({ type: "RENT", payload: Number(e.target.value) })
            }}
        >
            <option value={initialState.rent}>Any</option>
            <option value="5000">0-5k</option>
            <option value="10000">5-10k</option>
            <option value="20000">10-20k</option>
            <option value="20001">20k & Above</option>
        </select>

        <select
            value={filterState.location}
            onChange={(e) => {
                setFilterState({ ...filterState, location: e.target.value })
                dispatch({ type: "LOCATION", payload: e.target.value })
            }}
        >
            <option value={initialState.location}>Any</option>
            <option value={locationData.delhi}>Delhi</option>
            <option value={locationData.mumbai}>Mumbai</option>
            <option value={locationData.bangalore}>Bangalore</option>
            <option value={locationData.hyderabad}>Hyderabad</option>
        </select>

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
            <option value={propertyTypeData.floor}>Floor</option>
            <option value={propertyTypeData.house}>House</option>
        </select>

        <select
            value={filterState.availability}
            onChange={(e) => {
                setFilterState({ ...filterState, availability: e.target.value })
                dispatch({ type: "AVAILABILITY", payload: e.target.value })
            }}
        >
            <option value={initialState.availability}>Any</option>
            <option value={availabilityData.immediately}>immediately</option>
            <option value={availabilityData.within1month}>within1month</option>
            <option value={availabilityData.within3months}>within3months</option>
            <option value={availabilityData.after3months}>after3months</option>
        </select>


    </div>
}