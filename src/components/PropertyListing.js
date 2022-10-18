import "./PropertyCard.css";
import PropertyCard from "./PropertyCard";
import { useFilter } from "../Filters/FilterContext";


export default function PropertyListing() {

    const {filteredProductList} = useFilter();

    return <div className="property-listing flex-wrap-sb-c">
    {filteredProductList.map((propertyData) => <PropertyCard propertyData={propertyData} key={propertyData.name}/>)}
    </div>
}