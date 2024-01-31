import React from 'react'
import { BiLogoPinterestAlt, BiLogoFacebook } from "react-icons/bi"
import { AiOutlineInstagram } from "react-icons/ai"
import { RiTwitterXFill } from "react-icons/ri"
import { TfiYoutube } from "react-icons/tfi"
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
      <h2>Foo<span>dd</span>i</h2>
      <ul>
        <li><BiLogoPinterestAlt/></li>
        <li><AiOutlineInstagram/></li>
        <li><BiLogoFacebook/></li>
        <li><RiTwitterXFill/></li>
        <li><TfiYoutube/></li>
      </ul>
      <div className='Menu'>
        <div className='dropdown'>
            <h5 className='dropbtn'>RECIPES</h5>
            <div className='dropdown-content'>
                <h5>Contacts</h5>
                <h5>Blogs</h5>
                <h5>Privacy Policy</h5>
            </div>
        </div>
        <h5>BREAKFAST</h5>
        <h5>DINNER</h5>
        <h5>VIDEOS</h5>
      </div>
    </nav>
  )
}


export default Navbar