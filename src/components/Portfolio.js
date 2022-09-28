
import React from "react";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { Project } from "./Project";




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
            hrefDemo: "https://ishan-wijesingha99.github.io/Daily-Hourly-Planner-For-Employees/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Daily-Hourly-Planner-For-Employees"
        },
        {
            projectTitle: 'WEATHER APP',
            src: project3,
            hrefDemo: "https://ishan-wijesingha99.github.io/Weather-App-Based-Off-City/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Weather-App-Based-Off-City"
        },
        {
            projectTitle: 'PIZZA ONLINE SERVICE',
            src: project4,
            hrefDemo: "https://beerandpizza.herokuapp.com/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Beer-Bar-And-Pizza"
        },
        {
            projectTitle: 'PIG BROWSER GAME',
            src: project5,
            hrefDemo: "https://ishan-wijesingha99.github.io/Pig-Browser-Game/",
            hredCode: "https://github.com/Ishan-Wijesingha99/Pig-Browser-Game"
        },
        {
            projectTitle: 'JAVASCRIPT QUIZ',
            src: project6,
            hrefDemo: "https://ishan-wijesingha99.github.io/JavaScript-Quiz-App/",
            hredCode: "https://github.com/Ishan-Wijesingha99/JavaScript-Quiz-App"
        }
    ]

    return (
        <div className="height-container">
            <h2 className="portfolio-title">PORTFOLIO</h2>

            <div className="portfolio-section">

                {
                    projects.map(object => {
                        return (
                            <Project
                            projectTitle={object.projectTitle}
                            src={object.src}
                            hrefDemo={object.hrefDemo}
                            hredCode={object.hredCode}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}