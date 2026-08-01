import './project.css'
import { useParams } from 'react-router-dom'
import { projectsArr } from '../Projects/data';
import Logo from '../Header/img/logo.png'
import CheckIcon from './img/check-icon.svg'
import gitIcon from './img/git.svg'
import codeIcon from './img/code.svg'
import CheckGreenIcon from './img/check-green.svg'


function Project() {
    const { link } = useParams();

    const project = projectsArr.find(project => project.link === link)

    return (
        <div className='project-bg' >
            <div className='logo-container'>
                <img src={Logo} alt="logo" className='logo' />
            </div>
            <div className="project-row">
                <div className=' project-block block--head'>
                    <h3 className='project--name'>{project.title}</h3>
                    <div className='project--feautures'>
                        {project.features.map((item, index) => (
                            <div key={index} className='feature'>
                                <img src={CheckIcon} alt="check" className='feature-icon' />
                                <p className='feature-title'>{item}</p>
                            </div>
                        ))}
                    </div>
                    <p>{project.description}</p>
                    <div className="project--buttons-wrap">
                        <a href={project.linkShow} className="project-link">
                            <img src={gitIcon} alt="git-icon" />
                            <p>View Demo</p>
                        </a>
                        <a href={project.linkCode} className="project-link">
                            <img src={codeIcon} alt="code-icon" />
                            <p>View Code</p>
                        </a>
                    </div>
                </div>
                <div className='project-block block--img'>
                    <img src={project.bg} alt="" />
                </div>
            </div>
            <div className="project-row row-info">
                <div className='project-block technologies'>
                    <p className='title'>Technologies:</p>
                    <div className='project-tags'>
                        {project.tags.map((tag, index) => (
                            <div key={index} className='project-tag'>{tag}</div>
                        ))}
                    </div>
                </div>
                <div className='project-block block--what-did'>
                    <p className='title'>What i did</p>
                    {project.tasks.map((item, index) => (
                        <div key={index} className='feature'>
                            <img src={CheckGreenIcon} alt="check-green" className='feature-icon' />
                            <p className='feature-title'>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="project-row row-galery">
                {project.gallery.map((img, indexImg) => (
                    <img key = {indexImg} src={img} alt={`photo ${indexImg}`} />
                ))}
            </div>
        </div>
    )
}

export default Project