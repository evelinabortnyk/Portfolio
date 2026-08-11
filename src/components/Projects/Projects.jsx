import { projectsArr } from "./data.js"
import { Link } from "react-router-dom"

import './projects.css'

function Projects() {
    return (
        <div className="main-conteiner" id='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projectsArr.map((project, index) => (
                    <Link to={`${project.link}`} key={index} className="project">
                        <div className="project--img" >
                            <img src={project.img} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <div className="info--tags">
                            {project.tags.map((tag, tagIndex) => (
                                <div key={tagIndex} className="tag">{tag} </div>
                            ))}
                        </div>
                        <div className="info--features">
                            {project.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="feature">{feature} </div>
                            ))}
                        </div>    
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
