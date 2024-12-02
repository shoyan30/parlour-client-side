/* eslint-disable no-unused-vars */
import React from 'react';
import BannerTitle from '../BannerTitle/BannerTitle';
import Services from '../Services/Services';
import ProfessionalWork from '../ProfessionalWork/ProfessionalWork';
import Testimonials from '../Testimonials/Testimonials';
import ProfessionalForm from '../ProfessionalForm/ProfessionalForm';

const Home = () => {
    return (
        <div>
            <BannerTitle></BannerTitle>
            <Services></Services>
            <ProfessionalWork></ProfessionalWork>
            <Testimonials></Testimonials>
            <ProfessionalForm></ProfessionalForm>
        </div>
    );
};

export default Home;