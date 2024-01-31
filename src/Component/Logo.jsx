import React from 'react'
import imageOne from '../Assets/logo1.png'
import imageTwo from '../Assets/logo2.png'
import imageThree from '../Assets/logo3.png'
import imageFour from '../Assets/logo4.png'
import imageFive from '../Assets/logo5.png'

const Logo = ({textTitle}) => {

  const imageData = [
    {src: imageOne},
    {src: imageTwo},
    {src: imageThree},
    {src: imageFour},
    {src: imageFive}
  ]


  return (
    <div className='logoContainer'>
      <div>
        <h1>{textTitle}</h1>
      </div>
      <div className='logoImage'>
        {imageData.map((data, value) => {
          return <img src={data.src} alt='logo' key={value}/>
        })}
      </div>
    </div>
  )
}

export default Logo