import { Outlet } from "react-router-dom"; 

import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function Layout () {

    return(
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout