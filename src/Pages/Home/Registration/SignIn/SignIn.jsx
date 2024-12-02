import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Provider/AuthProvider';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';

const SignIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    const { signIn } = useContext(AuthContext);

    const handleLogin = async (data) => {
        try {
            const result = await signIn(data.email, data.password);
            console.log(result.user);

            // Success Alert
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Welcome back!',
                confirmButtonText: 'OK',
                timer: 3000,
            });

            reset(); // Reset form fields
            navigate(from, { replace: true });
        } catch (error) {
            console.error(error);

            // Error Alert
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'Invalid email or password. Please try again.',
                confirmButtonText: 'Retry',
            });
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen mt-12">
            <div className="hero-content lg:w-3/4 flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In!</h1>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <form
                        onSubmit={handleSubmit(handleLogin)}
                        className="card-body space-y-4"
                    >
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                })}
                                placeholder="Your email"
                                className="input input-bordered"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm font-bold">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                })}
                                placeholder="Your password"
                                className="input input-bordered"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm font-bold">
                                    {errors.password.message}
                                </p>
                            )}
                            <label className="label">
                                <Link to="/forgot-password" className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>

                        {/* Sign In Button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full" type="submit">
                                Sign In
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="divider">OR</div>
                        <GoogleSignIn></GoogleSignIn>
                        {/* Register Redirect */}
                        <div className="text-center">
                            <p>
                                Don't have an account?{' '}
                                <Link className="text-red-700 underline" to="/signup">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
