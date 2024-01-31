import React from 'react'
import { BiCalendar } from "react-icons/bi"

const Post = ({image, header, date, text, cont}) => {
  return (
    <div className='post'>
        <div className='postImage'>
            <img src={image} alt="image" />
        </div>
        <div className='content'>
            <h2>{header}</h2>
            <h3><BiCalendar/>&nbsp; {date}</h3>
            <p>{text}</p>
            <h4>{cont}</h4>
        </div>
    </div>
  )
}

export default Post