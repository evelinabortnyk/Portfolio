import { useState } from 'react'
import './header.css'

function Header() {
  const [menuActive, setMenuActive] = useState(false)
  const [classListBtn, setClassListBtn] = useState("menu-btn")
  const [classListMenu, setClassListMenu] = useState("burger-menu")


  // menuBtn.addEventListener('click', (e)=>{
  //   e.preventDefault;
  //   if(menuBtn.classList.value == 'menu-btn menu-btn-active'){
  //       menuBtn.classList.remove('menu-btn-active')
  //       menuBurger.classList.remove('burger-menu-active')

  //   }else{
  //       menuBtn.classList.add('menu-btn-active')
  //       menuBurger.classList.add('burger-menu-active')
  //   }
  // })

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
        <div className="header-logo">Evelina Bortnyk</div>
        <a href="#" className={`menu-btn ${classListBtn}`} value={menuActive} onClick={() => menuClick()}>
            <span className="menu-btn-burger"></span>
        </a>
      </header>
      <div className="menu">
          <nav className={`burger-menu ${classListMenu}`}>
            <ul className="menu-list">
              <li><a href="#">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Header
