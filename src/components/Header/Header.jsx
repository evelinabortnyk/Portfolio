import './header.css'
import Lebenslauf from '../../../public/Lebenslauf.pdf'
import Navigation from '../Navigation/Navigation'

function Header() {
  const text = '< Front end developer />'
  
  return (
    <header>
      <Navigation />
      <div className='header-background'>
        <h1>Evelina Bortnyk</h1>
        <p>{text}</p>
        <a href={Lebenslauf} download><button className='header-btn'>download the CV</button></a>
      </div>
    </header>
  )
}

export default Header
