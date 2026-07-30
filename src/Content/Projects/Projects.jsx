import { projectsArr } from "./data.js"
import './projects.css'

function Projects () {
    
    return (
        <div className="main-conteiner"  id='portfolio'>
            <h2>Portfolio</h2>
            <div className='main-grid projects'>
                {projectsArr.map((item, index)=> (
                    <div key={index} className="grid-element project">
                        <div className="project-info">
                            <img className="project-info_img" src={item.img}/>
                            <div className="project-info_content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        
                        <div className="project-links">
                            <a href={item.linkShow} target="_blank"><button>Review</button></a>
                            <a href={item.linkCode} target="_blank"><button>Code</button></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects