
import React from "react";



export const Project = function(props) {
    return (
        <div className="project-container">
            <p className="project-title">{props.projectTitle}</p>

            <div className="project">
                <img className="project-img" src={props.src} alt="" />
            </div>

            <div className="demo-code-container">
                <a
                className="project-demo"
                href={props.hrefDemo}
                target="_blank"
                rel="noopener noreferrer"
                >
                    DEMO
                </a>
                
                <a
                className="project-code"
                href={props.hredCode}
                >
                    CODE
                </a>
            </div>
        </div>
    )
}