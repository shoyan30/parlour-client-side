import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import AxiosSecure from '../../../Hook/AxiosSecure';

const Review = () => {
    const axiosSecure = AxiosSecure();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const reviewInfo = {
                name: data.name,
                details: data.details,
                rating: parseInt(data.rating, 10),
            };
            console.log(reviewInfo);

            // Submit review
            await axiosSecure.post('/review', reviewInfo);

            // Show success alert
            Swal.fire({
                icon: 'success',
                title: 'Thank you!',
                text: 'Your review has been submitted successfully.',
                confirmButtonColor: '#a855f7', // Tailwind pink-500 color
            });

            // Reset the form
            reset();
        } catch (error) {
            console.error(error);

            // Show error alert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to submit the review. Please try again later.',
                confirmButtonColor: '#f87171', // Tailwind red-500 color
            });
        }
    };

    return (
        <div className="w-2/4 mx-auto my-24">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                        className="border rounded p-2 w-full"
                    />
                    {errors.name && <p className="text-red-500">Name is required.</p>}
                </div>
                <div>
                    <label htmlFor="rating">Rating:</label>
                    <input
                        id="rating"
                        type="number"
                        step="0.1" // Allows floating-point values
                        {...register("rating", {
                            required: true,
                            min: 1,
                            max: 5,
                            valueAsNumber: true, // Ensures the value is treated as a number
                        })}
                        placeholder="Rating (1-5)"
                        className="border rounded p-2 w-full"
                    />
                    {errors.rating && (
                        <p className="text-red-500">
                            Rating must be a number between 1 and 5.
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="details">Comment:</label>
                    <textarea
                        id="details"
                        {...register("details", { required: true })}
                        placeholder="Write Here"
                        className="border rounded p-2 w-full"
                    />
                    {errors.details && <p className="text-red-500">Comment is required.</p>}
                </div>

                <button
                    type="submit"
                    className="bg-pink-500 text-white p-2 rounded w-full uppercase font-bold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Review;
