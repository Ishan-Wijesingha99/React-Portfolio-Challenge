
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainSection } from "./MainSection";



// app component
export const App = function() {
    const [currentSection, setCurrentSection] = React.useState("about me")

    return(
        <div>
            <Header currentSection={currentSection} setCurrentSection={setCurrentSection}/>
            <MainSection currentSection={currentSection}/>
            <Footer />
        </div>
    )
}