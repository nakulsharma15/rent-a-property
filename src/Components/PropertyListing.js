import "./Styles/PropertyCard.css";
import PropertyCard from "./PropertyCard";
import { useFilter } from "../Filters/FilterContext";

export default function PropertyListing() {

    const { filteredProductList } = useFilter();

    return <div className="property-listing flex-wrap-c">
        {filteredProductList.length !== 0 ? filteredProductList.map((propertyData) => <PropertyCard propertyData={propertyData} key={propertyData.name} />) :
            <div className="no-result-div">
                <h1>No results matching your search!</h1>
                <p>Try changing some of the filters to get matching property results</p>
            </div>}
    </div>
}
