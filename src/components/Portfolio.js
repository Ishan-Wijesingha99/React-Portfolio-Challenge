
import React from "react";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"




export const Portfolio = function() {

    const projects = [
        {
            projectTitle: 'PASSWORD GENERATOR',
            src: project1,
            hrefDemo: "https://ishan-wijesingha99.github.io/Random-Password-Generator/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Random-Password-Generator"
        },
        {
            projectTitle: 'WORK DAY SCHEDULER',
            src: project2,
            hrefDemo: "https://ishan-wijesingha99.github.io/Random-Password-Generator/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Random-Password-Generator"
        },
        {
            projectTitle: 'WEATHER BASED OFF CITY',
            src: project3,
            hrefDemo: "https://ishan-wijesingha99.github.io/Random-Password-Generator/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Random-Password-Generator"
        },
        {
            projectTitle: 'PIZZA ONLINE SERVICE',
            src: project4,
            hrefDemo: "https://ishan-wijesingha99.github.io/Random-Password-Generator/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Random-Password-Generator"
        },
        {
            projectTitle: 'PIG BROWSER GAME',
            src: project5,
            hrefDemo: "https://ishan-wijesingha99.github.io/Random-Password-Generator/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Random-Password-Generator"
        },
        {
            projectTitle: 'JAVASCRIPT QUIZ',
            src: project6,
            hrefDemo: "https://ishan-wijesingha99.github.io/Random-Password-Generator/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Random-Password-Generator"
        }
    ]

    return (
        <div className="height-container">
            <div className="portfolio-section">

                {
                    projects.map(object => {
                        return (
                            <div className="project-container">
                                <p className="project-title">{object.projectTitle}</p>

                                <div className="project">
                                    <img className="project-img" src={object.src} alt="" />
                                </div>

                                <div className="demo-code-container">
                                    <a
                                    className="project-demo"
                                    href={object.hrefDemo}
                                    >
                                        DEMO
                                    </a>
                                    
                                    <a
                                    className="project-code"
                                    href={object.hredCode}
                                    >
                                        CODE
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }


                

            </div>
        </div>
    )
}