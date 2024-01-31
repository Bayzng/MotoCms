import React from 'react'
import imageOne from '../../Assets/001.png'
import imageTwo from '../../Assets/002.png'
import imageThree from '../../Assets/003.png'
import imageFour from '../../Assets/004.png'
import Data from '../Data'
import './section.css'




const SectionOne = () => {

    const project = [
        {
            title: "Deep Dish Cookie Bow For Two",
            secondTitle: "Deep Dish Cookie Bow For Two",
            imgUrl: imageOne
        },
        {
            title: "Summer Chipotle Chicken Cobb Salad With Cilantro",
            secondTitle: "Summer Chipotle Chicken Cobb Salad With Cilantro",
            imgUrl: imageTwo
        },
        {
            title: "The Best Easy Pasta Salad",
            secondTitle: "The Best Easy Pasta Salad",
            imgUrl: imageThree
        },
        {
            title: "Clean Eating Instant Pot Summer Soup",
            secondTitle: "Clean Eating Instant Pot Summer Soup",
            imgUrl: imageFour
        },
    ]


  return (
    <div>
        <div className='row'>
            {project.map((value, index) => {
                return <Data key={index} {...value}/>
            })}
        </div>
    </div>
  )
}

export default SectionOne