import React from "react";

import "../styles/style.css";
import "../styles/booking-style.css";
function BookingCard(props)
{
    return (
        <div className="booking-card">
            <img src={props.img} alt="" className="booking-card-icon" />
            <div className="booking-card-text">
                <h6 className="booking-title">{props.title}</h6>
                <p className="booking-p">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. 
                </p>
            </div>
        </div>
    )
}

export default BookingCard;