import React from 'react'
import '../styles/Footer.css'
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";


const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <SiInstagram/>
                <SiFacebook/>
                <SiLinkedin/>
                <SiTwitter/>
            </div>
            <p>&copy; 2021 thepizzaria.com</p>
        </div>
    )
}

export default Footer
