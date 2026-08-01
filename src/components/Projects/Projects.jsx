import { projectsArr } from "./data.js"
import { useState } from "react"
import { Link } from "react-router-dom"

import './projects.css'

import gitIcon from './img/git.svg'
import codeIcon from './img/code.svg'

function Projects() {
    const [preview, setPreview] = useState('none')

    return (
        <div className="main-conteiner" id='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projectsArr.map((project, index) => (
                    <Link to={`${project.title}`} key={index} className="project">
                        <div className="project--img" >
                            <img src={project.img} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <div className="info--tags">
                            {project.tags.map((tag, tagIndex) => (
                                <div key={tagIndex} className="tag">{tag} </div>
                            ))}
                        </div>
                        {/* <p>{project.description}</p> */}
                        {/* <div className="project--buttons-wrap">
                            <a href={project.linkShow} className="project-links"><img src={gitIcon} alt="git-icon" /></a>
                            <a href={project.linkCode} className="project-links"><img src={codeIcon} alt="code-icon" /></a>
                        </div> */}
                    </Link>
                ))}

            </div>
            <div className="project-preview">

            </div>
        </div>
    )
}

export default Projects

// {projectsArr.map((project, index)=> (
//     <div key={index} className="project">
//         <div className="project--img">
//             <img src={project.img} alt={project.title}/>
//         </div>
//         <div className="project--description">
//             <div className="project--info-wrap">
//                 <h3>{project.title}</h3>
//                 <p>{project.description}</p>
//                 <div className="info--tags">
//                     {project.tags.map((tag, tagIndex) => (
//                         <p key={tagIndex}>#{tag} </p>
//                     ))}
//                 </div>
//             </div>
//             <div className="project--buttons-wrap">
//                 <a href={project.linkShow} className="project-links"><img src={gitIcon} alt="git-icon" /></a>
//                 <a href={project.linkCode} className="project-links"><img src={codeIcon} alt="code-icon" /></a>
//             </div>
//         </div>
//     </div>
// ))}