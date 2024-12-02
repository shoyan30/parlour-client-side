import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImg from '../../../assets/images/service-bg-img.jpg'
import SrviceDetailsContent from './SrviceDetailsContent';
import useServiceData from '../../../Hook/useServiceData';
const ServiceDetails = () => {
    // const { id } = useParams(); // Get the service ID from the URL
    //  const [service, setService] = useState(null);

    // const service = useLoaderData()
    const { id } = useParams();
    const {serviceData} = useServiceData(id)
    console.log(serviceData);
    return (

        <div>
            <div
                className="hero h-[500px] mb-8"
                style={{
                    backgroundImage: `url("${bgImg}")`,
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-neutral-content">
                    <div className="text-center">
                        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">Service Details</h1>
                        <p className="mb-5 mx-4 sm:mx-auto w-full sm:w-1/2 lg:w-1/4 text-sm sm:text-base">
                            consectetur adipiscing elit. Proin ac metus ac felis vestibulum vestibulum a at dui. Sed tempor ultricies arcu, a congue urna. Integer euismod malesuada urna, et accumsan neque aliquam in. Curabitur mollis semper turpis non condimentum.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

            <div>
                <SrviceDetailsContent service={serviceData}></SrviceDetailsContent>
            </div>
            
        </div>



    );



};

export default ServiceDetails;
