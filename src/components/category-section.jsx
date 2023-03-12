import React from "react";
import "../styles/style.css";
import "../styles/category-style.css"
import CategoryCard from "./category-card";
import CategoryData from "../categoryData";

function MapItems(Data)
{
    return (
        <CategoryCard
            img = {Data.img}
            title = {Data.title}
            desc = {Data.desc}
        />
    )
}
function Category()
{
    return (
        <div className="category">
            <h4>CATEGORY</h4>
            <h2>We Offer Best Services</h2>
            <div className="categories">
                {CategoryData.map(MapItems)}
            </div>
        </div>
    )
}

export default Category;