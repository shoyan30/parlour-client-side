import React, { useContext, useEffect, useState } from 'react';
import AxiosSecure from '../../../Hook/AxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider';

const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = AxiosSecure();


    const { user } = useContext(AuthContext)
    // console.log(user.email)
    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            axiosSecure.get(`/bookingservice/${user.email}`)
                .then((res) => {
                    setBookingList(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Error fetching booking data:", err);
                    setError("Failed to fetch booking data");
                    setLoading(false);
                });
        }
    }, [user?.email]); // Only re-run if user.email changes


    return (
        <div className="p-4">
            {loading && <p>Loading booking data...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && (
                <div>
                    <p className="text-lg font-bold mb-4">
                        This is Booking List Page: {bookingList.length}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                        {bookingList.map((list, index) => (
                            <div
                                key={list.id || index}
                                className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            >
                                <p className='font-bold text-lg text-green-500'>PENDING</p>
                                <img
                                    src={list.image}
                                    alt={list.title}
                                    className="w-48 h-48 object-cover mx-auto"
                                />
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-semibold mb-2">{list.title}</h3>
                                    <p className="text-gray-600">{list.details}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingList;
