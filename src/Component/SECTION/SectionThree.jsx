import React from 'react'
import Logo from '../Logo'
import "./section.css"

const SectionThree = () => {

    const logoSection = [
        {
            textTitle: "As Seen On..."
        }
    ]


  return (
    <div className='mainLogo'>
        <hr className='hrOne' />
        <div>
            {logoSection.map((value, index) => {
                return <Logo key={index} {...value}/>
            })}
        </div>
        <hr className='hrTwo' />
    </div>
  )
}

export default SectionThree