import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import Hotel from '../../cards/Hotel';
import Itinerary from '../../cards/Itinerary';
import Suggestions from '../../cards/Suggestions';
import Transport from '../../cards/Transport';
import Essentials from '../../cards/Essentials';
import Hacks from '../../cards/Hacks';
import UserInput from '../../cards/UserInput';
import Loading from '../../cards/Loading';

function ViewTrip() {
    const { tripID } = useParams();
    const [trip, setTrip] = useState(null);
    useEffect(()=>{
        history.scrollRestoration = "manual";
        window.scrollTo(0,0);
    },[]);

    const GetTripData = async () => {
        try {
            if (!tripID) return;
            console.log("Fetching trip data for ID:", tripID);
            
            const docRef = doc(db, 'AITrips', tripID);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Trip Data:", docSnap.data());
                setTrip(docSnap.data());
            } else {
                console.log("No such trip found!");
            }
        } catch (error) {
            console.error("Error fetching trip data:", error);
        }
    };
    useEffect(() => {
        GetTripData();
    }, [tripID]);

    return (
        <div className='bg-gray-900 overflow-hidden'>
            {trip ? (
                <div>
                    <div>
                <UserInput user={trip?.userSelection}/>
            </div>
            <div >
                <Hotel hotelList={trip?.tripData?.Hotels}/>
            </div>
            <div>
                <Itinerary itineraryList={trip?.tripData?.Itinerary}/>
            </div>
            <div>
                <Transport transportList={trip?.tripData?.Transportation}/>
            </div>
            <div>
                <Essentials essentialList={trip?.tripData?.Essentials}/>
            </div>
            <div>
                <Suggestions suggestionList={trip?.tripData?.Suggestions}/>
            </div>
            <div>
                <Hacks/>
            </div>
                </div>
            ) : (
                <Loading/>
            )}
            
        </div>
    );
}

export default ViewTrip;
