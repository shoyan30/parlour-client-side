import React, { useState } from 'react';
import { FaBars, FaClipboardList, FaHome } from 'react-icons/fa';
import { MdOutlineReviews } from 'react-icons/md';
import { TbBrandBooking } from 'react-icons/tb';
import { Link, NavLink, useParams } from 'react-router-dom';
import useServiceData from '../../Hook/useServiceData';
import { FaPhone } from 'react-icons/fa6';

const DashBoardSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const { id } = useParams(); // Get the dynamic `id` from the URL
    const { serviceData, loading } = useServiceData(id); // Fetch service data using the ID

    if (loading) {
        return <p>Loading service details...</p>;
    }

    return (
        <div className='mb-12'>
            {/* Menu on Small Screens */}
            <div className="sm:hidden bg-pink-400 p-4 flex justify-between items-center">
                <h1 className="text-white font-bold">Dashboard</h1>
                <button onClick={toggleMenu} className="text-white text-2xl">
                    <FaBars />
                </button>
            </div>

            {/* Sidebar for Large Screens */}
            <div className={`w-64 min-h-full bg-pink-600 sm:block ${isOpen ? 'block' : 'hidden'} sm:w-64`}>
                <h1 className="hidden sm:block sm:ms-4 text-white font-bold">Dashboard</h1>

                <ul className="menu text-white font-semibold space-y-2">

                    {
                        <>
                            <li>
                                {serviceData?._id ? (
                                    <NavLink to={`/dashboard/book/${serviceData._id}`}>
                                        <TbBrandBooking className="text-2xl" /> Book
                                    </NavLink>
                                ) : (
                                    <span>Loading...</span> // Optional: Add a fallback message or skeleton loader
                                )}
                            </li>

                            <li>
                                <NavLink to='/dashboard/bookinglist'><FaClipboardList className='text-2xl' />Booking List</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/review'><MdOutlineReviews className='text-2xl' />Review</NavLink>
                            </li>

                            <div className="divider divider-neutral">OR</div>

                            <li>
                                <NavLink to='/'><FaHome className='text-2xl' />Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/'><FaPhone className='text-2xl' />Contact</NavLink>
                            </li>

                        </>
                    }
                </ul>



            </div>
        </div>
    );
};

export default DashBoardSideBar;