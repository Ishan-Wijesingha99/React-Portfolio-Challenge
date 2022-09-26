
import React from "react";
import { Navigation } from "./Navigation";



// header component
export const Header = function(props) {



    return (
        <nav className="navbar">
            <div className="left-side-nav">
                <h1 className="header-name">Ishan</h1>
            </div>
            
            <Navigation currentSection={props.currentSection} setCurrentSection={props.setCurrentSection}/>
        </nav>
    )
}