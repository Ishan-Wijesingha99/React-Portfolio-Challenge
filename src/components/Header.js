
import React from "react";
import { Navigation } from "./Navigation";



// header component
export const Header = function() {



    return (
        <nav className="navbar">
            <div className="left-side-nav">
                <h1 className="header-name">Ishan Wijesingha</h1>
            </div>
            
            <Navigation />
        </nav>
    )
}