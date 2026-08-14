  import Navigation from '../Navigation/Navigation'
  import './header.css'
  import Lebenslauf from '/Lebenslauf.pdf'

  function Header() {
    const text = '< Front end developer />'
    
    return (
      <header>
        <Navigation/>
        <div className='header-background'>
          <h1>Evelina Bortnyk</h1>
          <p>{text}</p>
          <a href={Lebenslauf} download className='btn-wrap'><button>download the CV</button></a>
        </div>
      </header>
    )
  }

  export default Header
