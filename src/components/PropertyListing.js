import "./Styles/PropertyCard.css";
import PropertyCard from "./PropertyCard";
import { useFilter } from "../Filters/FilterContext";


export default function PropertyListing() {

    const { filteredProductList } = useFilter();

    return <div className="property-listing flex-wrap-c">
        {filteredProductList.map((propertyData) => <PropertyCard propertyData={propertyData} key={propertyData.name} />)}
    </div>
}