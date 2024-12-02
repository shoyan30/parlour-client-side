import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useServiceData from "../../../Hook/useServiceData";
import AxiosSecure from "../../../Hook/AxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Book = () => {
    const { id } = useParams();
    const { serviceData, loading: serviceLoading } = useServiceData(id);
    const { user, loading: authLoading } = useContext(AuthContext);
    const axiosSecure = AxiosSecure();

    const { register, handleSubmit, setValue } = useForm();
    const [Cuser, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user?.email) {
            setUserLoading(true);
            axiosSecure.get(`/users/${user.email}`)
                .then(response => {
                    const userData = response.data;
                    setUser(userData);
                    setValue("name", userData.name); // Populate form fields
                    setValue("email", userData.email);
                    setUserLoading(false);
                })
                .catch(err => {
                    setError("Failed to fetch user data");
                    setUserLoading(false);
                });
        }
    }, [user?.email, axiosSecure, setValue]);

    if (serviceLoading || authLoading || userLoading) {
        return <p>Loading service details...</p>;
    }

    if (!Cuser) {
        return <p>User not found or data unavailable.</p>;
    }

    const onSubmit = (data) => {
        const bookingServices = {
            name: Cuser.name,
            email: Cuser.email,
            image: serviceData.image,
            title: serviceData.name,
            price: serviceData.price,
            details: serviceData.details,
        };

        axiosSecure.post('/bookingservice', bookingServices)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Service Confirmed',
                    text: 'Your service has been successfully booked!',
                });
                
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Booking Failed',
                    text: 'Failed to confirm service. Please try again.',
                });
            });
    };

    return (
        <div className="w-2/4 mx-auto my-24">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <input 
                        type="text" 
                        {...register("name")} 
                        className="border rounded p-2 w-full" 
                    />
                </div>
                <div>
                    <input
                        type="email"
                        {...register("email")}
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        {...register("serviceTitle")}
                        defaultValue={serviceData.name}
                        readOnly
                        className="border rounded p-2 w-full bg-gray-100"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-pink-500 text-white p-2 rounded w-full uppercase font-bold"
                >
                    Confirmed Service
                </button>
            </form>

            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
};

export default Book;
