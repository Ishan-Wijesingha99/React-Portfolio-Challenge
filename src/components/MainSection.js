
import React from "react";
import { AboutMe } from "./AboutMe"
import { Contact } from "./Contact";
import { Portfolio } from "./Portfolio";
import { Resume } from "./Resume";



// MainSection component, this is where the section will be rendered to the user depending on what the currentSection state variable is
export const MainSection = function(props) {

    return (
        <div>
            {props.currentSection === "about me" && <AboutMe />}
            {props.currentSection === "portfolio" && <Portfolio />}
            {props.currentSection === "contact" && <Contact />}
            {props.currentSection === "resume" && <Resume />}
        </div>
    )
}