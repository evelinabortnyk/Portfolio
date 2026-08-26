import { projectsArr } from "./data.js"
import { Link } from "react-router-dom"

import './projects.css'
import openIcon from './img/open.svg'
import { useState } from "react"

import arrowICon from './img/arrow.svg'

function Projects() {
    const [rightInterval, setRightInterval] = useState(0)

    const NUMBERS ={
        cardWidth: 50,
        schowCards : 2,
    }


    function projectsScroll (action) {
        let arrLenght = projectsArr.length - NUMBERS.schowCards;
        if(action === 'next'){
            let interval = rightInterval + NUMBERS.cardWidth;
            setRightInterval(interval <= (NUMBERS.cardWidth )* arrLenght ?  rightInterval + NUMBERS.cardWidth : 0)
        } else if(action=== 'enter'){
            let interval = rightInterval - NUMBERS.cardWidth
            setRightInterval(interval >= 0 ? interval : (NUMBERS.cardWidth )* arrLenght)
        }
    }

    return (
        <div className="main-conteiner portfolio" id='portfolio'>
            <h2>Portfolio</h2>
            <div className='projects'>
                {projectsArr.map((project, index) => (
                    <Link to={`${project.link}`}  style={{right: `${rightInterval}%`}} key={index} className="project">
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
            <button className="projects-btn next-btn" onClick={()=> projectsScroll('next')}><img src={arrowICon} alt="arrov-next"/></button>
            <button className="projects-btn enter-btn" onClick={()=> projectsScroll('enter')}><img src={arrowICon} alt="arrov-enter"/></button>
        </div>
    )
}

export default Projects
