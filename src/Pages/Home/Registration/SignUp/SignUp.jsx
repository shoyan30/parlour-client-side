import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Provider/AuthProvider';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import AxiosSecure from '../../../../Hook/AxiosSecure';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const axiosSecure = AxiosSecure()
    const { createUser, logOut } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {

        console.log(data)
        try {
            const result = await createUser(data.email, data.password);
            console.log(result.user);

            const usersInfo = {
                name: data.name,
                email: data.email,
                Phone: data.phone
            }

            console.log(usersInfo);

            const res = await axiosSecure.post('/users', usersInfo);
            console.log(res.data)

            // Success Alert
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Registration Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                logOut();
                reset();
                navigate('/signin')
            }

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Sign Up Failed',
                text: 'There was an error creating your account. Please try again.',
                confirmButtonText: 'Retry',
            });
        }
    };

    return (
        <div className="relative mt-24 md:mb-10">
            <div className="text-center">
                <h1 className="text-2xl md:text-5xl font-bold uppercase">Sign Up Now</h1>
            </div>

            <div className="md:max-w-md shadow-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4 md:space-y-8">

                    <div className="form-control w-full">
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            aria-label="Name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm font-bold">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            aria-label="Email Address"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm font-bold">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="form-control w-full">
                        <input
                            type="text"
                            {...register("phone", { required: "Phone is required" })}
                            placeholder="Your phone"
                            className="input input-bordered w-full"
                            aria-label="phone Number"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm font-bold">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="form-control w-full relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                    message: "Password must include an uppercase letter and a special character",
                                },
                            })}
                            placeholder="Your Password"
                            className="input input-bordered pr-10 w-full"
                            aria-label="Password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute mt-2 right-3 top-0 text-gray-500"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm font-bold">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-pink-600 w-full text-white hover:bg-pink-700">
                            Sign Up
                        </button>
                    </div>

                    <div className="divider">OR</div>

                    <GoogleSignIn></GoogleSignIn>

                    <div className="text-center">
                        <p>
                            Already have an account?{" "}
                            <Link className="text-red-700 underline" to="/signin">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
