import { useContext, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
// Import the background image

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = () => {
        logOut()
            .then()
    }
    return (


        <nav className="md:fixed w-full top-0 left-0 z-50 bg-center bg-white opacity-80 font-bold">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-2xl flex items-center justify-center font-bold">
                    <img className="w-[127.45px] h-[48px]" src={logo} alt="" />
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="space-x-6">
                        <a href="/" className="">Home</a>
                        <a href="#blogs" className="">About</a>
                        <a href="#pricing" className="">Portfolio</a>
                        <a href="#sqa" className="">Our Team</a>
                        <a href="contact" className="">Contact Us</a>
                    </div>
                    <Link to='/signin'>
                        {user ? (
                            <button onClick={handleLogOut} className="btn bg-pink-500">Log Out</button>
                        ) : (
                            <Link to='signin'>
                                <button className="btn bg-pink-500">Log In</button>
                            </Link>
                        )}
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden shadow-md">
                    <a href="#features" className="block px-4 py-2">Home</a>
                    <a href="#blogs" className="block px-4 py-2">About</a>
                    <a href="#pricing" className="block px-4 py-2">Portfolio</a>
                    <a href="#sqa" className="block px-4 py-2">Our Team</a>
                    <a href="#sqa" className="block px-4 py-2">Contact Us</a>

                    {user ? (
                        <button onClick={handleLogOut} className="btn bg-pink-500">Log Out</button>
                    ) : (
                        <Link to='/signin'>
                            <button className="btn bg-pink-500">Log In</button>
                        </Link>
                    )}
                </div>
            )}
        </nav>




    );
};

export default NavBar;