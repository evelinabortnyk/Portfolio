import './project.css'
import { useParams } from 'react-router-dom'
import { projectsArr } from '../Projects/data'; 
import Logo from '../Header/img/logo.png'

function Project () {
    const { link } = useParams();

    const project = projectsArr.find(project => project.link === link)

    return (
        <div className='project-bg' style={{backgroundImage: `url(${project.bg})`}}>
            <div className='logo-container'>
                <img src={Logo} alt="logo" className='logo'/>
            </div>
            <div className='project-content'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default Project