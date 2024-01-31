import React from 'react'

const Data = ({title, imgUrl, secondTitle}) => {
  return (
    <div className='adebayo'>
        <div className='project-data'>
            <img src={imgUrl} alt="images" />
            <div className='project-title'>
                <h4>{title}</h4>
                <h3>{secondTitle}</h3>
            </div>
        </div>
    </div>
  )
}

export default Data