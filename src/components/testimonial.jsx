import React from "react";
import "../styles/style.css";
import "../styles/testimonial-style.css";
function Testimonial()
{
    return (
        <div>
            <div className="testimonial-div">
                <div className="testimonial-title-area">
                    <h6 className="testimonial-h6">TESTIMONIALS</h6>
                    <h2 className="testimonial-h2">What People Say About Us</h2>
                    <div className="button-div">
                        <button type="submit" className="button1 testimonial-button"></button>
                        <button type="submit" className="button2 testimonial-button"></button>
                        <button type="submit" className="button2 testimonial-button"></button>
                    </div>
                </div>
                <div className="testimonial-img-div">
                    <img src="../images/testimonial1.png" alt="" className="testimonial-img"/>
                </div>
            </div>
            <div className="brands-div">
                <img src="../imges/brands.jpg" alt="" className="brands"/>
            </div>
        </div>
    )
}

export default Testimonial;