import React from 'react';
import bannerImg from '../../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
const ProfessionalWork = () => {
    return (
        <div className='flex flex-col md:flex-row max-w-screen-xl mx-auto p-4 md:mt-28'>

            <div className=" p-4">
                <img className="w-full max-w-[484px] h-auto" src={bannerImg} alt="Banner" />
            </div>
            <div className='flex flex-col space-y-4 md:ms-auto'>
                <h1 className='text-5xl font-bold'>Let us handle your <br /> screen Professionally.</h1>
                <p>With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Purus commodo ipsum. </p>
                <div className='flex'>
                    <div className='mr-16 text-center'>
                        <h1 className='text-4xl text-red-600 font-bold'>500+</h1>
                        <p>Happy Customer</p>
                    </div>

                    <div className='text-center'>
                        <h1 className='text-4xl text-red-600 font-bold'>16+</h1>
                        <p>Total Service</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default ProfessionalWork;