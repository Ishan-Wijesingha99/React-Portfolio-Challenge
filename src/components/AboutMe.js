
import React from "react";
import heroImage from '../assets/profile-pic.jpg'



export const AboutMe = function() {
    return (
        <div className="height-container">
            <div className="about-me-section">
                <div className="about-me-left-side">
                    <h3 id="about-me-title">About Me</h3>
                    <p id="about-me-paragraph">I am a full stack developer that has experience working with the frontend and backend, specialising in frontend. In the frontend, I work best with React.js and Tailwind. I'm also proficient with Bootstrap and jQuery. In the backend, I work best with Node.js, Express.js, MongoDB and Mongoose. I'm also proficient with MySQL and Sequelize.</p>
                </div>

                <div className="about-me-right-side">
                    <img className="hero-image" src={heroImage} alt="" />
                </div>
            </div>
        </div>
    )
}