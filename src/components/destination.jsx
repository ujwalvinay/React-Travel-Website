import React from "react";
import "../styles/style.css";
import "../styles/destination-styles.css";
import DestinationCard from "./destination-card";
import DestinationData from "../destinationData";

function desCardValue(Data)
{
    return (
        <DestinationCard
            key = {Data.id}
            img = {Data.img}
            destination = {Data.destination}
            price = {Data.price}
            duration = {Data.duration}
        />
    )
}
function Destination()
{
    return (
        <div className="destination-section">
            <h6>Top Selling</h6>
            <h2>Top Destinations</h2>
            <div className="des-card-section">
                {DestinationData.map(desCardValue)}
            </div>
        </div>
    )
}
export default Destination;