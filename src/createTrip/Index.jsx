import React, { useState } from 'react'
import { startChatSession } from "../services/AImodel.jsx"
// import { chatSession } from '../services/AImodel.jsx';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig.jsx';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Navigate, useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

function CreateTrip() {
    const router=useNavigate();
    const [formData, setFormData]=useState({
        destination:"",
        duration:"",
        budget:"",
        groupSize:"",
        tripType:""
    })

    const [chatSession, setChatSession] = useState(null);

    // Initialize chat session on component mount
    React.useEffect(() => {
        const initChatSession = async () => {
            const session = await startChatSession();
            setChatSession(session);
        };

        initChatSession();

        window.scrollTo(0,0);

    }, []);

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData, [name]:value});
    }
    const[loading,setLoading]=useState(false);
    const SaveTrip = async (TripData) => {
        try {
            setLoading(true);
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                alert("User not found! Please sign in.");
                setLoading(false);
                return;
            }
    
            const docID = Date.now().toString(); // Ensure it's a valid string
            console.log("Saving Trip with ID:", docID);
    
            await setDoc(doc(db, "AITrips", docID), {
                userSelection: formData,
                tripData: JSON.parse(TripData),
                userEmail: user?.email,
                id: docID
            });
    
            console.log("Trip saved successfully!");
            router(`/viewTrip/${docID}`);
        } catch (error) {
            console.error("Error saving trip:", error);
            alert("Failed to save trip. See console for details.");
        } finally {
            setLoading(false);
        }
    };
    const OnGenerateTrip = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!formData?.destination || !formData?.budget || !formData?.duration || !formData?.groupSize || !formData?.tripType) {
            toast('Please fill all the details!', {
                icon: '🙏',
                duration: 4000,
                style: { background: '#fff', color: '#333' },
            });
            return;
        }
        if (!user) {
            toast('Please sign in to continue!', {
                icon: '👤🔑',
                duration: 4000,
                style: { background: '#fff', color: '#333' },
            });
            return;
        }
    
        const AI_PROMPT = `Generate a ${formData.duration}-day travel plan for ${formData.destination} for ${formData.groupSize} with a ${formData.budget} budget, focusing on ${formData.tripType} experiences. Include Hotel Recommendations with HotelName, HotelAddress, Price, HotelImageUrl, GeoCoordinates, Rating, and a brief Description. List suitable Transportation Options within ${formData.destination} with emojis and their prices. Provide a list of Essentials for Travel with relevant emojis (e.g., 👟 for shoes, ☀️ for sunscreen). Create a Day-by-day schedule with PlaceName, PlaceDetails, PlaceImageUrl (if available), GeoCoordinates (if possible), and estimated Time spent at each location. Finally, offer Helpful Travel Tips and Suggestions for travelers in ${formData.destination}. In JSON format`;
    
        setLoading(true);
        console.log(AI_PROMPT);
    
        let attempts = 0;
        const maxRetries = 3; // Try 3 times before failing
    
        while (attempts < maxRetries) {
            try {
                const result = await chatSession.sendMessage(AI_PROMPT);
                const tripPlan = result?.response?.text();
                console.log(tripPlan);
    
                SaveTrip(tripPlan);
                toast.success('Trip Generated Successfully!')
                setLoading(false);
                return;
            } catch (error) {
                console.error(`Attempt ${attempts + 1}: Error generating trip plan`, error);
    
                if (error.message.includes("503") && attempts < maxRetries - 1) {
                    await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 2 seconds before retrying
                    attempts++;
                } else {
                    toast('AI Model Overloaded! Please try again later (The developer is using a basic AI model due to limited funds...)', {
                        icon: '❌',
                        duration: 10000,
                        style: { background: '#fff', color: '#333' },
                    });
                    setLoading(false);
                    return;
                }
            }
        }
    };
    
  return (
    <div className='bg-gray-900'>
        <Toaster />
        <div className='flex flex-col justify-center overflow-hidden'>
            <h1 className='text-center md:text-6xl text-5xl font-extrabold mt-10 text-blue-400'>Dream, Plan, Explore!🗺️</h1>
            <span className='text-center text-xl mt-5 text-white italic px-2'>"Just tell us what you want, and we’ll handle the rest!"</span>
            <div className='mt-10 md:w-200 mx-auto'>
                <div className=' px-15 py-5 rounded text-white'>
                    <h2>🌍 Where’s Your Next Adventure?</h2>
                    {/* <GooglePlacesAutocomplete
                        apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    /> */}
                    <input 
                        type="text"
                        name='destination'
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder='Dream destinations? '
                        className='mt-1 px-5 py-2 shadow w-full rounded border border-gray-200 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:scale-105'
                    />
                </div>
                <div className=' px-15 py-5 rounded text-white'>
                    <h2>🗓️ Trip Length, Please!</h2>
                    <input 
                        type="number"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder='Tell us how many days, and we will make each one unforgettable! ✨'
                        className='mt-1 px-5 py-2 shadow w-full rounded border border-gray-200 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:scale-105'
                    />
                </div>
                <div className='px-15 py-5 rounded text-white'>
                    <h2>💸 What’s Your Budget Vibe?</h2>
                    <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className='mt-1 px-5 py-2 shadow w-full rounded border border-gray-200 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:scale-105'
                    >
                        <option value="">💰 Select Your Budget</option>
                        <option value="low">Low Budget: 💸✨ (Frugal yet fun)</option>
                        <option value="medium">Medium Budget: 💳🌟 (Balanced and comfortable)</option>
                        <option value="high">High Budget: 💎🍾 (Luxury and indulgence)</option>
                    </select>
                </div>
                <div className='px-15 py-5 rounded text-white'>
                    <h2>👫 Who’s Joining the Fun?</h2>
                    <select
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className='mt-1 px-5 py-2 shadow w-full rounded border border-gray-200 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:scale-105'
                    >
                        <option value="">👥 Select Group Size</option>
                        <option value="solo">🌍 Solo Explorer</option>
                        <option value="couple">💑 Romantic Couple</option>
                        <option value="large group">👨‍👩‍👧‍👦 Fun-Loving Group</option>
                    </select>
                </div>
                <div className='px-15 py-5 rounded text-white'>
                    <h2>🎭 What’s Your Travel Style?</h2>
                    <select
                        name="tripType"
                        value={formData.tripType}
                        onChange={handleChange}
                        className='mt-1 px-5 py-2 shadow w-full rounded border border-gray-200 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:scale-105'

                    >
                        <option value="">🎒 Choose Your Travel Style</option>
                        <option value="relaxation">Relaxation Retreat 🏖️</option>
                        <option value="adventure">Adventure Seeker 🧗</option>
                        <option value="city explorer">City Explorer 🏙️</option>
                        <option value="nature">Nature Lover 🌿</option>
                        <option value="culture">Culture Curious 🏰</option>
                        <option value="shopping">Shopping Spree 🛍️</option>
                    </select>
                </div>
                <div className='flex items-center text-center m-auto mt-5 mb-30 justify-center'>
                <button
                    onClick={OnGenerateTrip}
                    className={`mt-6 bg-blue-700 hover:bg-blue-400 hover:cursor-pointer hover:shadow-xl hover:shadow-blue-950 text-white font-bold py-3 px-5 rounded-md ${loading? 'bg-gray-800 hover:bg-gray-800':''}`}
                    disabled={loading}
                >
                    {loading?
                        'It May Take Some Time!':'🚀 Create My Trip!'
                    }
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateTrip