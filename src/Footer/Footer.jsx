import './footer.css'


function Footer (){
    const contactsArr = [
        {'src': '/Portfolio_2026/src/Footer/img/envelope.svg', 'link': 'mailto:bortnykevelinaa@gmail.com', 'type': 'Email',},
        {'src': '/Portfolio_2026/Footer/img/linkedin.svg', 'link': 'https://www.linkedin.com/in/evelina-bortnyk-81bb83416/', 'type': 'Linkedin',},
        {'src': '/Portfolio_2026/Footer/img/github.svg', 'link': 'https://github.com/evelinabortnyk', 'type': 'GitHub',},
    ]
    return (

        <footer>
            <h2>Contacts</h2>
            
            <div className='footer-content'>
                {contactsArr.map((item, index) => (
                    <a key={index} href={item.link}><div className='footer-icon' style={{backgroundImage: `url(${item.src})`}}></div>: {item.type}</a>
                ))}
            </div>
        </footer>
    )
}

export default Footer 