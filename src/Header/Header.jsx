import { useState } from 'react'
import './header.css'

function Header() {
  const [menuActive, setMenuActive] = useState(false)
  const [classListBtn, setClassListBtn] = useState("menu-btn")
  const [classListMenu, setClassListMenu] = useState("burger-menu")

  const naviArr = ['About me', 'My scills', "Portfolio", 'Contacts']
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
      <header className='header'>
        <div className="header-logo"></div>
        <a href="#" className={`menu-btn ${classListBtn}`} value={menuActive} onClick={() => menuClick()}>
          <span className="menu-btn-burger"></span>
        </a>
      </header>
      <div className="menu">
        <nav className={`burger-menu ${classListMenu}`}>
          <ul className="menu-list">
            {naviArr.map((item, index) => (
              <li key={index}><a href={`#${item}`}>{item}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='header-background'>
        <h1>Evelina Bortnyk</h1>
        <p>Front end developer</p>
        <a href='./Lebenslauf.pdf' download><button className='header-btn'>Download the CV</button></a>
      </div>
    </>

  )
}

export default Header
