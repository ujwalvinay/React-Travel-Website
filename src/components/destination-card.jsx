import React from "react";
import "../styles/style.css";
import "../styles/destination-styles.css"
function DestinationCard(props)
{
    return (
        <div className="destination-card">
            <div className="destination-img-div">
                <img src={props.img} alt="" className = "destination-img"/>
            </div>
            <div className="destination-text">
                <div className="location-price-div">
                    <p>{props.destination}</p>
                    <p>${props.price}K</p>
                </div>
                <p id="duration-p"><img src="../images/Navigation.png" alt="" className="navigation-icon"/> {props.duration} Days Trip</p>
            </div>
        </div>
    )
}

export default DestinationCard;