
import React from "react";



// Navigation component
export const Navigation = function(props) {

    // initialise style objects for each section
    let aboutMeStylesObject = {}
    let portfolioStylesObject = {}
    let contactStylesObject = {}
    let resumeStylesObject = {}

    if(props.currentSection === 'about me') {
        // if the currentSection variable is 'about me', then change the colour of the 'ABOUT ME' nav link
        aboutMeStylesObject = {
            color: 'rgb(206, 204, 204)'
        }
    } else if(props.currentSection === 'portfolio') {
        // if the currentSection variable is 'portfolio', then change the colour of the 'PORTFOLIO' nav link
        portfolioStylesObject = {
            color: 'rgb(206, 204, 204)'
        }
    } else if(props.currentSection === 'contact') {
        // if the currentSection variable is 'contact', then change the colour of the 'CONTACT' nav link
        contactStylesObject = {
            color: 'rgb(206, 204, 204)'
        }
    } else if(props.currentSection === 'resume') {
        // if the currentSection variable is 'resume', then change the colour of the 'RESUME' nav link
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