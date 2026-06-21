import './content.css'
import Projects from './Projects/Projects'

function Content () {
    const scillsArr= ['HTML', 'CSS', 'Java Script', 'React', 'TypeScript', 'Vue', 'Node', 'AJAX', 'Git']
    return (
        <>
        <main>
            <div className="main-conteiner">
                <h2>About me</h2>
                <p>
                    Hi, I'm Evelina, a Frontend Developer passionate about creating modern, responsive, and user-friendly web applications.
                    I work with HTML, CSS, JavaScript, React, and modern web development tools. I enjoy turning ideas into clean, functional interfaces and continuously improving my skills by building personal projects and learning new technologies.
                    I have commercial experience as a Frontend Developer and completed professional training in web development with distinction. Currently, I am looking for opportunities to contribute to real-world projects, grow as a developer, and collaborate with experienced teams.
                    When I'm not coding, I enjoy sports, reading, and exploring new ideas in technology.
                </p>
            </div>
            <div className='main-conteiner'>
                <h2>My scills</h2>
                <div className='main-grid'>
                    {scillsArr.map((item, index)=> (
                        <div className='grid-element scill' key={index}>{item}</div>
                    ))}
                </div>
            </div>
            <Projects />          
        </main>
            
        </>
    )
}

export default Content