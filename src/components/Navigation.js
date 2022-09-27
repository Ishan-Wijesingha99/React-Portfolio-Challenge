
import React from "react";



// Navigation
export const Navigation = function(props) {

    let aboutMeStylesObject = {}
    let portfolioStylesObject = {}
    let contactStylesObject = {}
    let resumeStylesObject = {}

    if(props.currentSection === 'about me') {
        aboutMeStylesObject = {
            color: 'rgb(206, 204, 204)'
        }
    } else if(props.currentSection === 'portfolio') {
        portfolioStylesObject = {
            color: 'rgb(206, 204, 204)'
        }
    } else if(props.currentSection === 'contact') {
        contactStylesObject = {
            color: 'rgb(206, 204, 204)'
        }
    } else if(props.currentSection === 'resume') {
        resumeStylesObject = {
            color: 'rgb(206, 204, 204)'
        }
    } 

    return (
        <div className="right-side-nav">
            <p
            className="navbar-list-item"
            onClick={() => props.setCurrentSection('about me')}
            style={aboutMeStylesObject}
            >
                ABOUT ME
            </p>

            <p
            className="navbar-list-item"
            onClick={() => props.setCurrentSection('portfolio')}
            style={portfolioStylesObject}
            >
                PORTFOLIO
            </p>

            <p
            className="navbar-list-item"
            onClick={() => props.setCurrentSection('contact')}
            style={contactStylesObject}
            >
                CONTACT
            </p>

            <p
            className="navbar-list-item"
            onClick={() => props.setCurrentSection('resume')}
            style={resumeStylesObject}
            >
                RESUME
            </p>
        </div>
    )
} 