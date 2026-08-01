import './footer.css'
import mailIcon from './img/envelope.svg'
import linkedinIcon from './img/linkedin.svg'
import githubIcon from './img/github.svg'

function Footer (){
    const contactsArr = [
        {'src': mailIcon, 'link': 'mailto:bortnykevelinaa@gmail.com', 'type': 'Email',},
        {'src': linkedinIcon, 'link': 'https://www.linkedin.com/in/evelina-bortnyk-81bb83416/', 'type': 'Linkedin',},
        {'src': githubIcon, 'link': 'https://github.com/evelinabortnyk', 'type': 'GitHub',},
    ]
    return (

        <footer id='contacts'>
            <h2>Contacts</h2>
            
            <div className='footer-content'>
                {contactsArr.map((item, index) => (
                    <a key={index} href={item.link}><img src={item.src} className='footer-icon' alt="" />: {item.type}</a>
                ))}
            </div>
        </footer>
    )
}

export default Footer 