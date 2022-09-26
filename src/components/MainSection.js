
import React from "react";
import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";



export const MainSection = function(props) {

    return (
        <div>
            {props.currentSection === "about me" && <AboutMe />}
            {props.currentSection === "portfolio" && <Portfolio />}
            {props.currentSection === "contact" && <Contact />}
        </div>
    )
}