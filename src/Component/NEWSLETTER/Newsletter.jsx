import React from 'react'
import "./newsletter.css"

const Newsletter = () => {
  return (
    <div>
        <div className='newsletter'>
            <div className='newsletter-one'>
              <div className='news-one'>
                <h1>Subscribe to my Newsletter</h1>
                <h4>Sign up with your email address to receive news and updates.</h4>
              </div>
              
              <form action="">
                <div className='news-two'>
                  <button className='news-button'>
                    <input type="email" name='email' placeholder='Email*' required  />
                  </button>
                  <button className='submit-button'>
                      Subscribe
                    </button>
                </div>
              </form>
            </div>
        </div>
        
    </div>
  )
}

export default Newsletter