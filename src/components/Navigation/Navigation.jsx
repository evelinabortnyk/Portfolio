import { useState } from 'react'

import './navigation.css'

function Navigation() {
    const [menuActive, setMenuActive] = useState(false)
    const [classListBtn, setClassListBtn] = useState("menu-btn")
    const [classListMenu, setClassListMenu] = useState("burger-menu")

    const naviArr = [
        {'value': 'About me', 'link' : 'about-me',},
        {'value': 'My scills', 'link' : 'my-scills',},
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

    return (
        <>
            <div className='header-navigation'>
                <div className="header-logo"></div>
                <button href="#" className={`menu-btn ${classListBtn}`} value={menuActive} onClick={() => menuClick()}>
                    <span className="menu-btn-burger"></span>
                </button>
            </div>
            <div className="menu">
                <nav className={`burger-menu ${classListMenu}`}>
                    <ul className="menu-list">
                        {naviArr.map((item, index) => (
                            <li key={index} onClick={() => { document.getElementById(`${item.link}`)?.scrollIntoView({ behavior: 'smooth' }) }}><a href={`#${item.link}`}>{item.value}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
      </>
    )
}

export default Navigation