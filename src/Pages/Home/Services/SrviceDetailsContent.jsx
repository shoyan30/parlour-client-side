import React from 'react';
import detailsImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
import { Link } from 'react-router-dom';

const SrviceDetailsContent = ({ service }) => {

    if (!service) {
        return <p>Loading...</p>; // Display a loading state while data is being fetched
    }
    return (
        <div className='mb-24'>
            <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto p-4 md:mt-28'>
                <div className="px-4 sm:px-8">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                        Details for Service: {service.name}
                    </h2>
                    <p className="text-sm sm:text-base">
                        <strong>Price:</strong> ${service.price}
                    </p>
                    <p className="text-sm sm:text-base">
                        <strong>Description:</strong> {service.details}
                    </p>
                    <p className="text-sm sm:text-base">
                        <strong>Duration:</strong> {service.duration}
                    </p>
                    <div className="text-sm sm:text-base mt-4">
                        {service.servicesOffered && service.servicesOffered.length > 0 && (
                            <div className="text-sm sm:text-base mt-4">
                                <strong>Services Offered:</strong>
                                <ul className="list-disc list-inside mt-2">
                                    {service.servicesOffered.map((serviceItem, index) => (
                                        <li key={index}>{serviceItem}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Conditionally rendering Benefits */}
                        {service.benefits && service.benefits.length > 0 && (
                            <div className="text-sm sm:text-base mt-4">
                                <strong>Benefits:</strong>
                                <ul className="list-disc list-inside mt-2">
                                    {service.benefits.map((benefitItem, index) => (
                                        <li key={index}>{benefitItem}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="text-sm sm:text-base mt-4">
                        <strong>Add-Ons:</strong>
                        <ul className="list-disc list-inside mt-2">
                            {service.addOns.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className=" p-4">
                    <img className="w-full max-w-[484px] h-auto" src={service.image} alt="Banner" />
                </div>

            </div>

            <div className='w-2/4 mx-auto  border-2 mt-10'>
                <Link to={`/dashboard/book/${service._id}`}>
                    <button className='bg-pink-500 font-bold p-2 w-full'>Get A Service</button>
                </Link>
            </div>
        </div>

    );
};

export default SrviceDetailsContent;