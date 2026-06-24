import { useState } from 'react'
import './header.css'
import Lebenslauf from '../../public/Lebenslauf.pdf'

function Header() {
  const [menuActive, setMenuActive] = useState(false)
  const [classListBtn, setClassListBtn] = useState("menu-btn")
  const [classListMenu, setClassListMenu] = useState("burger-menu")

  const naviArr = [
    {'value': 'About me', 'link' : 'about-me',},
    {'value': 'My scills', 'link' : 'my-scills',},
    {'value': 'Portfolio', 'link' : 'portfolio',},
    {'value': 'Contacts', 'link' : 'contacts',},
  ]

  const text = '< Front end developer />'
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
    <header>
      <div className='header'>
        <div className="header-logo"></div>
        <a href="#" className={`menu-btn ${classListBtn}`} value={menuActive} onClick={() => menuClick()}>
          <span className="menu-btn-burger"></span>
        </a>
      </div>
      <div className="menu">
        <nav className={`burger-menu ${classListMenu}`}>
          <ul className="menu-list">
            {naviArr.map((item, index) => (
              <li key={index} onClick={()=>{ document.getElementById(`${item.link}`)?.scrollIntoView({behavior: 'smooth'})}}><a href={`#${item.link}`}>{item.value}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='header-background'>
        <h1>Evelina Bortnyk</h1>
        <p>{text}</p>
        <a href={Lebenslauf} download><button className='header-btn'>download the CV</button></a>
      </div>
    </header>

  )
}

export default Header
