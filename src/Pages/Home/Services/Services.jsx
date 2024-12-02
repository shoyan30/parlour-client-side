import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import AxiosSecure from '../../../Hook/AxiosSecure';

const Services = () => {
    const [services, setServices] = useState([]); // Initialize with an empty array

    useEffect(() => {
        const axiosInstance = AxiosSecure(); // Get the axios instance with the baseURL

        axiosInstance.get('/services') // Make the GET request
            .then((response) => {
                // Check if the response data is an array
                if (Array.isArray(response.data)) {
                    setServices(response.data); // Set the response data if it's an array
                } else {
                    console.error('Expected an array but got:', response.data);
                    setServices([]); // Set empty array in case the data is not an array
                }
            })
            .catch((error) => {
                console.error('Error fetching services:', error); // Handle error
                setServices([]); // Set empty array on error
            });
    }, []);

    const sliderRef = useRef(null);
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: 'linear',
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="p-8  max-w-screen-xl mx-auto relative  md:mt-28">
            <h2 className="text-3xl text-center font-bold mb-6 ms-4 uppercase">Our Awesome <span className='text-pink-600'>Services</span></h2>

            <Slider ref={sliderRef} {...settings}>
                {services.length > 0 ? (
                    services.map((service, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-2xl space-y-4"
                        >
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full mx-auto object-cover rounded-lg mb-4"
                                style={{ width: '120px', height: '120px' }}
                            />
                            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                            <p className="text-gray-600">${service.price}</p>
                            <p className="text-gray-600">
                                {service.details.split(' ').slice(0, 14).join(' ')}...
                            </p>
                            <Link to={`/details/${service._id}`}>
                                <button className="btn btn-active max-w-fit btn-secondary mt-4">Service Details</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No services available at the moment.</p>
                )}
            </Slider>

            {/* Custom navigation buttons with responsive positioning */}
            <div className="flex gap-2 justify-center items-center mt-4 lg:absolute lg:top-4 lg:right-24 lg:flex-row lg:space-x-0 space-x-4">
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="text-3xl text-gray-700 hover:text-gray-500 border-4"
                >
                    <IoIosArrowBack />
                </button>
                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="text-3xl text-gray-700 hover:text-gray-500 border-4"
                >
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default Services;
