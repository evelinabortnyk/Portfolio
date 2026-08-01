import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/LAyour";
import Content from "../content/Content";

function App () {
    return (
        <Routes>
            <Route path='/Portfolio' element={<Layout />} >
                <Route index element={<Content />} />

            </Route>
        </Routes>
    )
}

export default App