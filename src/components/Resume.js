
import React from "react";



export const Resume = function() {

    const techList = [
        'HTML',
        'CSS',
        'JavaScript',
        'React.js',
        'Tailwind',
        'GitHub',
        'GitBash',
        'GitLab',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Bootstrap',
        'jQuery',
        'Handlebars',
        'MySQL',
        'Sequelize',
        'Jest',
        'Insomnia',
        'Postman',
        'Visual Studio Code',
        'Materialize',
        'Flowbite',
        'Heroku',
        'Figma'
    ]

    return (
        <div>
            <div className="resume-section">
                <div>
                    <h2 className="resume-title">RESUME</h2>
                    <p className="download-resume-text">
                        {/* in order to download a pdf or an image or anything, you need to add the attribute 'download' */}
                        You can download my resume <a href="/RESUME-ISHAN-WIJESINGHA.pdf" download>here</a>
                    </p>
                    <p className="tech-list-title">Here is a list of the technologies I've worked with</p>
                    
                    <ul>
                        {techList.map(element => {
                            return <li className="tech-list-item">{element}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}