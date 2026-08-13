import './content.css'
import Projects from '../Projects/Projects'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'

function Content () {
    const scillsArr= ['HTML', 'CSS', 'Java Script', 'React', 'TypeScript', 'Vue', 'Node', 'AJAX', 'Git']
    return (
        <>
        {/* <Navigation /> */}
        <Header />
        <main>
            <div className="main-conteiner about-me" id='about-me'>
                <h2>About me</h2>
                <p>
                    Hi, I'm Evelina, a Frontend Developer passionate about creating modern, responsive, and user-friendly web applications.
                    I work with HTML, CSS, JavaScript, React, and modern web development tools. I enjoy turning ideas into clean, functional interfaces and continuously improving my skills by building personal projects and learning new technologies.
                    I have commercial experience as a Frontend Developer and completed professional training in web development with distinction. Currently, I am looking for opportunities to contribute to real-world projects, grow as a developer, and collaborate with experienced teams.
                    When I'm not coding, I enjoy sports, reading, and exploring new ideas in technology.
                </p>
                <h4>What I bring:</h4>
                <p>
                    I’m disciplined, persistent and genuinely passionate about what I do. 
                    When I’m working on something I enjoy, I can easily lose track of time.
                    <br/>
                    I approach challenges step by step, breaking bigger goals into clear and manageable tasks. 
                    I learn quickly, adapt to new situations and like looking at problems from different perspectives — 
                    often finding solutions or opportunities that aren’t immediately obvious.
                </p>
            </div>
            <div className='main-conteiner' id='my-skills'>
                <h2>My scills</h2>
                <div className='main-grid'>
                    {scillsArr.map((item, index)=> (
                        <div className='grid-element scill' key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <Projects />    
        </main>    
        <Footer />   
    </> 
    )
}

export default Content