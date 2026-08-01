import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layour";
import Content from "../content/Content";
import Project from "../Project/Project";

function App () {
    return (
        <Routes>
            <Route path='/Portfolio' element={<Content />} />
                {/* <Route index element={<Content />} /> */}
                <Route path="/Portfolio/:link" element={<Project />} />
                
            {/* </Route> */}
        </Routes>
    )
}

export default App