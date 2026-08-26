import './project.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { projectsArr } from '../Projects/data';
import Logo from '../Header/img/logo.png'
import BackIcon from './img/back.svg'
import CheckIcon from './img/check-icon.svg'
import gitIcon from './img/git.svg'
import codeIcon from './img/code.svg'
import CheckGreenIcon from './img/check-green.svg'
import Footer from '../Footer/Footer'
import Gallery from './gallery/Gallery';


function Project() {
    const { link } = useParams();

    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = projectsArr.find(project => project.link === link)

    return (
        <div className='project-bg' >
            <div className='logo-container'>
                <img src={Logo} alt="logo" className='logo' />
            </div>
            <button onClick={() => navigate(-1)} className='back-btn'>
                <img src={BackIcon} alt="back" />
                <p>Back to portfolio</p>
            </button>
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
                    <div className="buttons-wrap buttons-wrap--head">
                        <a href={project.linkShow}  target='_blank' className='btn-wrap'>
                            <button className="project--btn">
                                <img src={gitIcon} alt="git-icon" />
                                <p>Live Demo</p>
                            </button>
                        </a>
                        <a href={project.linkCode} className='btn-wrap' target='_blank'>
                            <button className="project--btn" >
                                <img src={codeIcon} alt="code-icon" />
                                <p>View Code</p>
                            </button>
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
                                <div key={index} className='technologies-tag tag'>{tag}</div>
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
                <div className="project-block buttons-wrap buttons-wrap--footer">
                    <a href={project.linkShow} target='_blank' className='btn-wrap'>
                        <button className="project--btn">
                            <img src={gitIcon} alt="git-icon" />
                            <p>Live Demo</p>
                        </button>
                    </a>
                    <a href={project.linkCode} target='_blank' className='btn-wrap'>
                        <button className="project--btn">
                            <img src={codeIcon} alt="code-icon" />
                            <p>View Code</p>
                        </button>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Project