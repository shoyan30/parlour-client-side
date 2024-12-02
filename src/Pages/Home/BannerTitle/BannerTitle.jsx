import React from 'react';
import bannerImg from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const BannerTitle = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto p-4 md:mt-24'>
            <div className='flex flex-col space-y-4 mt-16'>
                <h1 className='text-5xl font-bold'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat </p>
                <button className="btn btn-active max-w-fit btn-secondary">Get An Appointment</button>
            </div>

            <div className="md:ms-auto p-4">
                <img className="w-full max-w-[484px] h-auto" src={bannerImg} alt="Banner"/>
            </div>

        </div>
    );
};

export default BannerTitle;