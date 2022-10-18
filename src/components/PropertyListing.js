import "./PropertyCard.css";
import propertiesData from "../database/propertiesData";
import PropertyCard from "./PropertyCard";


export default function PropertyListing() {

    return <div className="property-listing flex-wrap-sb-c">
    {propertiesData.map((propertyData) => <PropertyCard propertyData={propertyData}/>)}
    </div>
}