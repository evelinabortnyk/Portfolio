import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header  from './Header/Header.jsx'
import Content from './Content/Content.jsx'
import Footer from './Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
  </StrictMode>,
)
