import React from "react";
import "../styles/category-style.css";
import "../styles/style.css";
function CategoryCard(props)
{
    return (
        <div className="categoryCard">
            <img src={props.img} className="category-icon" alt=""/>
            <h5>{props.title}</h5>
            <h6>{props.desc}</h6>
        </div>
    )   
}

export default CategoryCard;