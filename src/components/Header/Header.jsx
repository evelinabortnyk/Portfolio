import './header.css'
import Lebenslauf from '/Lebenslauf.pdf'

function Header() {
  const text = '< Front end developer />'
  
  return (
    <header>
      <div className='header-background'>
        <h1>Evelina Bortnyk</h1>
        <p>{text}</p>
        <a href={Lebenslauf} download><button className='header-btn'>download the CV</button></a>
      </div>
    </header>
  )
}

export default Header
