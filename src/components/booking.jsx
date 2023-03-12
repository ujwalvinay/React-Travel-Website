import React from "react";
import BookingCard from "./booking-card";

import "../styles/style.css";
import "../styles/booking-style.css";
function Booking()
{
    return (
        <div className="booking-section">
            
            <div className="booking-flex">
                <div className="booking-text">
                    <h6 className="booking-h6">Easy and Fast</h6>
                    <h2 className="booking-h2">Book Your Next Trip In 3 Easy Steps</h2>
                    <div className="booking-steps">
                        <BookingCard img="../images/choose-icon.png" title="Choose Destination" />
                        <BookingCard img ="../images/payment-icon.png" title="Make Payment" />
                        <BookingCard img="../images/airport-icon.png" title="React Airport on Selected Dates" />
                    </div>
                </div>
                <div className="booking-img-div">
                    <img src="../images/booking-img.png" alt="" className="booking-img"/>
                </div>
            </div>
        </div>
    )
}

export default Booking;