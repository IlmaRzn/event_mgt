import React from 'react'
import './footer.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsTwitter } from 'react-icons/bs'
import {ImFacebook } from 'react-icons/im'
import {AiFillInstagram } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className="footContainer container">
                <div className="logoDiv">
                    
                    <div className="social flex">
                <ImFacebook className="icon"/>
                <AiFillInstagram className="icon"/>
                < BsTwitter className="icon"/>
                </div>
                </div>
                    <div className="footerLinks ">
                        <span className="linkTitle">
                            Helpful Links
                        </span>
                        
                        <li>
                            <NavLink to={"/gallery"}>Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/feedback"}>Feedback</NavLink>
                        </li>
                       
                    </div>

                    <div className="footerLinks">
                        <span className="linkTitle">
                            Contact Us
                        </span>
                        <span className='phone'>+94-754040404</span>
                        <span className='email'>DreamPlanner1@outlook.com</span>
                        <span className='address'>no1.mainstreet,kandy</span>
                    </div>
               
            </div>
        </div>
    )
}

export default Footer;