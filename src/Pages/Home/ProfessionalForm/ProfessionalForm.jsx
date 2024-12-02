import React from 'react';
import { useForm } from 'react-hook-form';
import { FaMessage } from 'react-icons/fa6';
import { SlCalender } from 'react-icons/sl';

const ProfessionalForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    return (
        <div className="relative">
            
            <div>
                <div className="text-center p-8">
                    <h1 className='text-5xl font-bold uppercase'>send your message</h1>
                </div>

                <div className="mb-12 md:ms-24">
                    <div className="md:max-w-2xl shadow-2xl mx-auto">
                        <form className="card-body space-y-8">

                            <div className='flex flex-col sm:flex-row gap-6'>
                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        name='name'
                                        placeholder="First Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control w-full">
                                    <input
                                        type="name"
                                        {...register("email", { required: true })}
                                        placeholder="Last name"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-6'>
                                <div className="form-control w-full relative">
                                    <input
                                        type="email"
                                        {...register("phone", { required: true })}
                                        placeholder="Your Email"
                                        className="input input-bordered pr-10 w-full"
                                    />
                                    
                                </div>

                                <div className="form-control w-full">
                                    <input
                                        type="text"
                                        {...register("people", { required: true })}
                                        placeholder="Phone Number"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <textarea
                                    {...register("message", { required: true })}
                                    placeholder="Enter your message"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-pink-600 w-full">
                                    Send Message <FaMessage />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalForm;