import { useState } from 'react'

import './navigation.css'
import Logo from '../Header/img/logo.png'


function Navigation() {
    const [menuActive, setMenuActive] = useState(false)
    const [classListBtn, setClassListBtn] = useState("menu-btn")
    const [classListMenu, setClassListMenu] = useState("burger-menu")

    const naviArr = [
        {'value': 'About me', 'link' : 'about-me',},
        {'value': 'My skills', 'link' : 'my-skills',},
        {'value': 'Portfolio', 'link' : 'portfolio',},
        {'value': 'Contacts', 'link' : 'contacts',},
    ]

    function menuClick() {
        setMenuActive(!menuActive)
    
        if (menuActive === true) {
          setClassListBtn('menu-btn-active')
          setClassListMenu('burger-menu-active')
        } else {
          setClassListBtn('menu-btn')
          setClassListMenu('burger-menu')
        }
      }

      function scrollToSection (id){
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      };

    return (
        <>
            <div className='header-navigation'>
            <div className='logo-container'>
                <img src={Logo} alt="logo" className='logo'/>
            </div>
                <button href="#" className={`menu-btn ${classListBtn}`} value={menuActive} onClick={() => menuClick()}>
                    <span className="menu-btn-burger"></span>
                </button>
            </div>
            <div className="menu">
                <nav className={`burger-menu ${classListMenu}`}>
                    <ul className="menu-list">
                        {naviArr.map((item, index) => (
                            <li key={index} onClick={() => scrollToSection(item.link)}>{item.value}</li>
                        ))}
                    </ul>
                </nav>
            </div>
      </>
    )
}

export default Navigation