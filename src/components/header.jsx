import React from "react";
import Navbar from "./navbar";
import "../styles/style.css";
import "../styles/header-style.css";
import heroImg from "../images/hero-img.png";
import playButton from "../images/Play-button.png";
function Header()
{
    return (
        <div className="Hero-space">
            <Navbar />
            <div className="hero">
                <div className="hero-text">
                    <h4>
                        Best Destinations around the world
                    </h4>
                    <h1>
                        Travel, enjoy <br/>
                        and live a new <br/>
                        and full life  <br/>
                    </h1>
                    <p>
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                    </p>
                    <div className="heroButtons">
                        <button className="findBtn">Find out more</button>
                        <button className="playBtn"> <img src={playButton} alt="" className="playbtnIcon"/> Play Demo </button>
                    </div>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt=""  className="heroImage" />
                </div>
            </div>
        </div>
    )
}
export default Header;