import React from "react";
import Header from "./components/header";
import Category from "./components/category-section";
import Destination from "./components/destination";
import Booking from "./components/booking";
import "./styles/style.css"
function App()
{
    return (
        <div className="container">
            <Header />
            < Category />
            < Destination />
            <Booking />
        </div>
    )
}

export default App;