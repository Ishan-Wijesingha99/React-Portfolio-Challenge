
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainSection } from "./MainSection";



// App component
export const App = function() {
    // state which controls which section will be shown to the user
    const [currentSection, setCurrentSection] = React.useState("about me")

    return(
        <div>
            {/* pass currentSection and the currentSection setter method as props into Header and MainSection component */}
            <Header currentSection={currentSection} setCurrentSection={setCurrentSection}/>
            <MainSection currentSection={currentSection}/>
            <Footer />
        </div>
    )
}