
import React from "react";



// Navigation
export const Navigation = function(props) {


    return (
        <div className="right-side-nav">
            <p className="navbar-list-item" onClick={() => props.setCurrentSection('about me')}>ABOUT ME</p>
            <p className="navbar-list-item" onClick={() => props.setCurrentSection('portfolio')}>PORTFOLIO</p>
            <p className="navbar-list-item" onClick={() => props.setCurrentSection('contact')}>CONTACT</p>
            <p className="navbar-list-item" onClick={() => props.setCurrentSection('resume')}>RESUME</p>
        </div>
    )
} 