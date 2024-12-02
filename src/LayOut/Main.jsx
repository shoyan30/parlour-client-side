import { Outlet, useLocation } from 'react-router-dom';
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const hideNavBar = location.pathname.includes("/dashboard"); // Check if the pathname includes "/dashboard"

    return (
        <div>
            {!hideNavBar && <NavBar></NavBar>} {/* Render NavBar only if hideNavBar is false */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
