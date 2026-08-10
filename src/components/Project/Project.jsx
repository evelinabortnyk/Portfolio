import './project.css'
import { useParams } from 'react-router-dom'
import { projectsArr } from '../Projects/data';
import Logo from '../Header/img/logo.png'
import CheckIcon from './img/check-icon.svg'
import gitIcon from './img/git.svg'
import codeIcon from './img/code.svg'
import CheckGreenIcon from './img/check-green.svg'
import Footer from '../Footer/Footer'
import Gallery from './gallery/Gallery';


function Project() {
    const { link } = useParams();

    const project = projectsArr.find(project => project.link === link)

    return (
        <div className='project-bg' >
            <div className='logo-container'>
                <img src={Logo} alt="logo" className='logo' />
            </div>
            <div className='project-wrap'>
                <div className=' project-block block--head'>
                    <h3 className='head--name'>{project.title}</h3>
                    <div className='head--feautures'>
                        {project.features.map((item, index) => (
                            <div key={index} className='feature'>
                                <img src={CheckIcon} alt="check" className='feature-icon' />
                                <p className='feature-title'>{item}</p>
                            </div>
                        ))}
                    </div>
                    <p>{project.description}</p>
                    <div className="head--buttons-wrap">
                        <a href={project.linkShow} className="head-link" target='_blank'>
                            <img src={gitIcon} alt="git-icon" />
                            <p>Live Demo</p>
                        </a>
                        <a href={project.linkCode} className="head-link" target='_blank'>
                            <img src={codeIcon} alt="code-icon" />
                            <p>View Code</p>
                        </a>
                    </div>
                </div>
                <div className='project-block block--img'>
                    <img src={project.preview} alt="preview" />
                </div>
                <div className='project-block block--scills'>
                    <div className='technologies'>
                        <p className='title'>Technologies:</p>
                        <div className='technologies-tags'>
                            {project.tags.map((tag, index) => (
                                <div key={index} className='technologies-tag'>{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className='features'>
                        <p className='title features-title'>What i did</p>
                        <div className='features'>
                            {project.tasks.map((item, index) => (
                                <div key={index} className='feature'>
                                    <img src={CheckGreenIcon} alt="check-green" className='feature-icon' />
                                    <p className='feature-title'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <div className="project-block block--gallery">
                    <p className="title">project gallery</p>
                    < Gallery data={project.gallery.join(' ')}/>
                </div>
                <div className="project-block head--buttons-wrap buttons-wrap-footer">
                    <a href={project.linkShow} className="head-link" target='_blank'>
                        <img src={gitIcon} alt="git-icon" />
                        <p>Live Demo</p>
                    </a>
                    <a href={project.linkCode} className="head-link" target='_blank'>
                        <img src={codeIcon} alt="code-icon" />
                        <p>View Code</p>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project