import React from 'react'
import Data from '../Data'
import imageOne from "../../Assets/005.png"
import imageTwo from "../../Assets/006.png"
import imageThree from "../../Assets/007.png"
import imageFour from "../../Assets/008.png"
import "./section.css"

const SectionTwo = () => {

    const projects = [
        {
            title: "Spring Vegetable Frittata",
            secondTitle: "Spring Vegetable Frittata",
            imgUrl: imageOne
        },
        {
            title: "Breakfast Egg Muffins",
            secondTitle: "Breakfast Egg Muffins",
            imgUrl: imageTwo
        },
        {
            title: "The Best Easy Pasta Salad",
            secondTitle: "The Best Easy Pasta Salad",
            imgUrl: imageThree
        },
        {
            title: "Poached Egg: How to poach and egg perfectly",
            secondTitle: "Poached Egg: How to poach and egg perfectly",
            imgUrl: imageFour
        },
    ]



  return (
    <div>
        <div className='Main'>
            <div>
                <h1>Popular Recipes</h1>
            </div>
            <div>
                <button className='button'>More Best Recipes</button>
            </div>
        </div>
        <div className='row'>
            {projects.map((value, index) => {
                return <Data key={index} {...value}/>
            })}
        </div>
    </div>
  )
}

export default SectionTwo