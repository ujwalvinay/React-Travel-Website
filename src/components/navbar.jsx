import React from "react";
import Logo from "../images/logo.png";
import "../styles/style.css"
import "../styles/header-style.css";

function Navbar()
{
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="" className="logo-img" />
            </div>
            <nav className="Navbar">
                <ul className="Navbar-nav">
                    <li>Destinations</li>
                    <li>Hotels</li>
                    <li>Flights</li>
                    <li>Bookings</li>
                    <li>Login</li>
                    <li> <button type="submit" className="Signup-btn">Sign up</button> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;