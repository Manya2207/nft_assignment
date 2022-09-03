import React from 'react'
import './Navbar.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaDiscord } from 'react-icons/fa'

const footer = [
        "Send Feedback",
        "Terms of Use",
        "Privacy Policy"
]

const footerIcons = [
    <FaLinkedinIn />, 
    <FaFacebookF />,
    <FaTwitter />,
    <FaDiscord />
]

const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='head'>About SmartUp</h4>
        {
            footer.map(heading => <li className='footerList'>
              {heading}
            </li> )
        }
        <br />
        {
            footerIcons.map(icon => <a href="#" className='footerIcon'>
              {icon}
            </a> )
        }
        <p className='reserved'>© All rights reserved</p>
    </div>
  )
}

export default Footer

