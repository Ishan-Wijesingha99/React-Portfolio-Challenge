
import React from "react";
import {FaGithub, FaLinkedin, } from 'react-icons/fa'
import {BsStackOverflow} from 'react-icons/bs'


// Footer
export const Footer = function() {
    return (
        <div className="footer">
            <a
            className="footer-link"
            href="https://github.com/Ishan-Wijesingha99"
            target='_blank'
            rel="noopener noreferrer"
            >
                <FaGithub size={40} className="footer-icon"/>
            </a>
            
            <a
            className="footer-link"
            href="https://www.linkedin.com/in/ishan-wijesingha-497222239/"
            target='_blank'
            rel="noopener noreferrer"
            >
                <FaLinkedin size={40} className="footer-icon"/>
            </a>
            
            <a
            className="footer-link"
            href="https://stackoverflow.com/users/20091214/ishan-wijesingha99"
            target='_blank'
            rel="noopener noreferrer"
            >
                <BsStackOverflow size={40} className="footer-icon"/>
            </a>
        </div>
    )
}