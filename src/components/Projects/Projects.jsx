import { projectsArr } from "./data.js"
import { Link } from "react-router-dom"

import './projects.css'

function Projects() {

    return (
        <div className="main-conteiner portfolio" id='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projectsArr.map((project, index) => (
                    <Link to={`${project.link}`} key={index} className="project">
                        {/* <div className="project--img" > */}
                        <img className="project--img" src={project.img} alt={project.title} />
                        {/* </div> */}
                        <h3 className="project--title">{project.title}</h3>

                        <div className="info--tags">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                <div key={tagIndex} className="info--tag tag">{tag} </div>
                            ))}
                        </div>
                        
                        {/* <div className="info--features">
                            {project.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="feature">{feature} </div>
                            ))}
                        </div>     */}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
