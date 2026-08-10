import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layour";
import Content from "../content/Content";
import Project from "../Project/Project";

function App () {
    return (
        <Routes>
            <Route path='/' element={<Content />} />
                <Route path="/:link" element={<Project />} />
        </Routes>
    )
}

export default App