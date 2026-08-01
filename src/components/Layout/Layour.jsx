import { Outlet } from "react-router-dom"; 

import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function Layout () {

    return(
        <>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout