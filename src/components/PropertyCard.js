import "./PropertyCard.css";
import propertiesData from "../database/propertiesData";

export default function PropertyCard({propertyData}) {

    return <>
        <div class="property-card">

            <div class="property-image">
                <img src={propertyData.image} alt={propertyData.name} />
            </div>

            <div class="popular-property-div flex-c">
                <span class="material-symbols-outlined">
                    temp_preferences_custom
                </span>
                Popular
            </div>

            <div class="property-content">

                <div class="property-content-header">
                    <div class="property-price">
                        <h2>₹{propertyData.rent}</h2>
                        <p>/month</p>
                    </div>

                    <h2>{propertyData.name}</h2>

                </div>

                <p class="property-address">{propertyData.address}</p>

                <div class="property-card-footer flex-sb-c">

                    <div class="property-card-footer-div flex-c">

                        <span class="material-symbols-outlined">
                            bed
                        </span>
                        <p>3 Beds</p>

                    </div>

                    <div class="property-card-footer-div flex-c">

                        <span class="material-symbols-outlined">
                            bathtub
                        </span>
                        <p>2 Bathrooms</p>

                    </div>

                    <div class="property-card-footer-div flex-c">

                        <span class="material-symbols-outlined">
                            area_chart
                        </span>

                        <p>5x7 m<sup>2</sup></p>

                    </div>

                </div>

            </div>

        </div>
        
    </>
}