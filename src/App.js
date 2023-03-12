import React from "react";
import Header from "./components/header";
import Category from "./components/category-section";
import Destination from "./components/destination";
import Booking from "./components/booking";
import Testimonial from "./components/testimonial";
import "./styles/style.css"
function App()
{
    return (
        <div className="container">
            <Header />
            < Category />
            < Destination />
            <Booking />
            <Testimonial />
        </div>
    )
}

export default App;