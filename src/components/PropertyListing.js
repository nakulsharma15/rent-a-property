import "./PropertyCard.css";
import PropertiesData from "../Database/PropertiesData";
import PropertyCard from "./PropertyCard";
import { useFilter } from "../Filters/FilterContext";
// import { filter } from "@chakra-ui/react";


export default function PropertyListing() {

    const {filteredProductList} = useFilter();

    console.log(filteredProductList)
    return <div className="property-listing flex-wrap-sb-c">
    {filteredProductList.map((propertyData) => <PropertyCard propertyData={propertyData} key={propertyData.name}/>)}
    </div>
}