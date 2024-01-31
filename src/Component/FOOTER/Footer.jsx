import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
            <div>
                <h2>Foo<span>dd</span>i</h2>
                <p>
                    Hello and welcome to Fooddi! I’m Lisa, a real food lover,<br />
                    meal prep fanatic, massive wanderluster and YouTuber. <br />
                    I’m also a big advocate of self-care and taking life “down <br />
                    a notch” – while chasing adventures half-way across the <br />
                    globe! Because it’s all about balance.
                </p>
            </div>

            <div>
                <h2>Follow US</h2>
                <ul>
                    <li>Newsletter</li>
                    <li>RSS Feed</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>

            <div>
                <h2>Browse</h2>
                <ul>
                    <li>Browse Recipe</li>
                    <li>50+ Best Dinner</li>
                    <li>40+ Best Breakfast</li>
                    <li>20+ Salmon recipe</li>
                    <li>Web stories</li>
                </ul>
            </div>

            <div>
                <h2>Menu</h2>
                <ul>
                    <li>Recipes</li>
                    <li>Breakfast</li>
                    <li>Dinner</li>
                    <li>Videos</li>
                </ul>
            </div>
        </div>
        <hr />
        <h4 className='copyright'>Copyright © 2023. All Rights Reserved clone.</h4>
    </div>
  )
}

export default Footer