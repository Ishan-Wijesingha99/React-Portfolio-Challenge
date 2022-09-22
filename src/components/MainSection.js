
import React from "react";
import { AboutMe } from "./AboutMe"



export const MainSection = function() {
    const [currentSection, setCurrentSection] = React.useState("about me")

    return (
        <div>
            {currentSection === "about me" && <AboutMe />}
        </div>
    )
}