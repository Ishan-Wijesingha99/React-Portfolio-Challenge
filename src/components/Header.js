
import React from "react";
import { Navigation } from "./Navigation";



// Header component
export const Header = function(props) {

    // this function will change the currentSection state variable to 'about me', which will change the displayed section to the 'About Me' section
    const changeSection = function() {
        props.setCurrentSection('about me')
    }

    return (
        <nav className="navbar">
            <div className="left-side-nav">
                <h1
                className="header-name"
                onClick={changeSection}
                >
                    Ishan
                </h1>
            </div>
            
            {/* passing currentSection and currentSection setter method down as props into Navigation component */}
            <Navigation currentSection={props.currentSection} setCurrentSection={props.setCurrentSection}/>
        </nav>
    )
}