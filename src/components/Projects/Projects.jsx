import { projectsArr } from "./data.js"
import { Link } from "react-router-dom"

import './projects.css'
import openIcon from './img/open.svg'

function Projects() {

    return (
        <div className="main-conteiner portfolio" id='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projectsArr.map((project, index) => (
                    <Link to={`${project.link}`} onClick={()=> window.scrollTo(0, 0)} key={index} className="project">
                        <img className="project--img" src={project.img} alt={project.title} />
                        <div className="project--title">
                            <h3>{project.title}</h3>
                            <img src={openIcon} alt="open link" className="title-icon"/>
                        </div>

                        <div className="info--tags">
                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                <div key={tagIndex} className="info--tag tag">{tag} </div>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects
