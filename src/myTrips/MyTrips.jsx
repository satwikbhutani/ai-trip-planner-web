import { collection, query, where, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../services/firebaseConfig';
import { FaClock, FaUsers, FaMoneyBillWave, FaMapMarkedAlt } from "react-icons/fa";


function MyTrips() {
    const [userTrips, setUserTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const goToTrip = () => {
        navigate('/createTrip');
    };

    const ViewTrip = (docID) => {
        navigate(`/viewTrip/${docID}`)
    }

    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/');
            return;
        }

        try {
            const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));
            const querySnapshot = await getDocs(q);
            const trips = [];
            querySnapshot.forEach((doc) => {
                trips.push(doc.data());
            });
            setUserTrips(trips);
        } catch (error) {
            console.error("Error fetching user trips:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-900 min-h-screen">
            <h2 className="md:text-5xl text-3xl px-1  mt-10 mb-25 font-extrabold text-center text-white drop-shadow-lg">
                🌟 My Globe-Trotting Adventures
            </h2>

            {loading ? (
                <div className="flex justify-center items-center mt-20">
                    <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-blue-500"></div>
                </div>
            ) : userTrips.length === 0 ? (
                <div>
                <p className="text-center text-gray-300 text-lg">
                    No trips found. Start planning your next adventure! ✈️
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-xl font-semibold hover:bg-blue-600 transition-all" onClick={goToTrip}>
                    Start Planning 🚀
                </button>
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {userTrips.map((trip, index) => (
                        <Link to={'/viewTrip/'+trip?.id}>
                        <div
                            key={index}
                            className="relative py-10 px-8 text-white text-center bg-white/10 backdrop-blur-xl rounded-3xl shadow-md border border-gray-700 transition transform hover:scale-105 hover:shadow-blue-400 duration-300"
                        >
                            <h1 className="text-3xl md:text-4xl font-bold text-blue-200 drop-shadow-lg uppercase mb-4">
                                {trip?.userSelection?.destination || "Unknown"}
                            </h1>

                            <div className="flex flex-col items-center space-y-4">
                                <p className="flex items-center text-lg md:text-xl font-semibold text-gray-300">
                                    <FaClock className="mr-2 text-blue-300" />
                                    Duration: <span className="ml-2 text-blue-400">{trip?.userSelection?.duration || "N/A"}</span>
                                </p>

                                <p className="flex items-center text-lg md:text-xl font-semibold text-gray-300">
                                    <FaUsers className="mr-2 text-green-300" />
                                    Group Size: <span className="ml-2 text-green-400">{trip?.userSelection?.groupSize || "N/A"}</span>
                                </p>

                                <p className="flex items-center text-lg md:text-xl font-semibold text-gray-300">
                                    <FaMoneyBillWave className="mr-2 text-yellow-300" />
                                    Budget: <span className="ml-2 text-yellow-400">{trip?.userSelection?.budget || "N/A"}</span>
                                </p>

                                <p className="flex items-center text-lg md:text-xl font-semibold text-gray-300">
                                    <FaMapMarkedAlt className="mr-2 text-purple-300" />
                                    Trip Type: <span className="ml-2 text-purple-400">{trip?.userSelection?.tripType || "N/A"}</span>
                                </p>
                            </div>
                        </div>
                        </Link>
                    ))}
                    
                </div>
                <button className="mt-15 hover:cursor-pointer px-6 py-3 bg-blue-500 text-white text-lg rounded-xl font-semibold hover:bg-blue-600 transition-all" onClick={goToTrip}>
                    Explore More! 🚀
                </button>
                </div>
            )}
        </div>
    );
}

export default MyTrips;

