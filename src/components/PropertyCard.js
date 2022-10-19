import "./Styles/PropertyCard.css";

export default function PropertyCard({propertyData}) {

    return <>
        <div className="property-card">

            <div className="property-image">
                <img src={propertyData.image} alt={propertyData.name} />
            </div>

            <div className="popular-property-div flex-c">
                <span className="material-symbols-outlined">
                    temp_preferences_custom
                </span>
                Popular
            </div>

            <div className="property-content">

                <div className="property-content-header flex-column">
                    <div className="property-price flex-c">
                        <h2>₹{propertyData.rent}</h2>
                        <p>/month</p>
                    </div>

                    <h2>{propertyData.name}</h2>

                </div>

                <p className="property-address">{propertyData.address}</p>

                <div className="property-card-footer flex-sb-c">

                    <div className="property-card-footer-div flex-c">

                        <span className="material-symbols-outlined">
                            bed
                        </span>
                        <p>3 Beds</p>

                    </div>

                    <div className="property-card-footer-div flex-c">

                        <span className="material-symbols-outlined">
                            bathtub
                        </span>
                        <p>2 Bathrooms</p>

                    </div>

                    <div className="property-card-footer-div flex-c">

                        <span className="material-symbols-outlined">
                            area_chart
                        </span>

                        <p>5x7 m<sup>2</sup></p>

                    </div>

                </div>

            </div>

        </div>
        
    </>
}