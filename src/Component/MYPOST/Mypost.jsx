import React from 'react'
import imageOne from "../../Assets/food1.jpeg"
import imageTwo from "../../Assets/food2.jpeg"
import imageThree from "../../Assets/food3.jpeg"
import "./mypost.css"
import Post from '../Post'

const Mypost = () => {

    const recent = [
        {
            image: imageOne,
            header: "Clean Eating Instant Pot Summer Soup",
            date: "12.02.2022",
            text: "Wearing face masks in public has now become routine. But even after months of acclimating to the new normal, selecting a face mask that strikes the right balance between breathability and safety is less straightforward than expected. As it turns out, a too-thick mask may be more harmful than helpful.",
            cont: "CONTINUE READING"
        },

        {
            image: imageTwo,
            header: "Cashew Crunch Salad with Sesame Dressing",
            date: "12.02.2022",
            text: "Which is saying a lot, because I adore soup, and we have a lot of BEST SOUPS EVER here on the blog. Like golden soup, and wild rice soup, and most recently, that lemon chicken soup with the pasta. What can I say? Add it to the list of greats.",
            cont: "CONTINUE READING"
        },

        {
            image: imageThree,
            header: "Instant Pot Minestrone Soup",
            date: "12.02.2022",
            text: "I don’t mean to sound so happy about this, but how about this chilling-down-of-the-weather situation? Haaappy dance!, It’s time to bust out the Instant Pots, slow cookers, or big ol’ soup pots again because my favorite season is making its annual appearance. SOUP SEASON!",
            cont: "CONTINUE READING"
        }
    ]



  return (
    <div className='recent-post'>
        <h1>Recent Post</h1>
        <div>
            {recent.map((value, index) => {
                return <Post key={index} {...value}/>
            })}
        </div>
    </div>
  )
}

export default Mypost