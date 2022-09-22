
import React from "react";



// header component
export const Header = function() {

    

    return (
        <nav className="navbar">
            <div className="left-side-nav">
                <h1 className="header-name">Ishan Wijesingha</h1>
            </div>
            <div className="right-side-nav">
                <p className="navbar-list-item">About me</p>
                <p className="navbar-list-item">Portfolio</p>
                <p className="navbar-list-item">Contact</p>
                <p className="navbar-list-item">Resume</p>
            </div>
        </nav>
    )
}