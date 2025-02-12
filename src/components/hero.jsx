import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHotel, FaMapMarkerAlt, FaCog } from 'react-icons/fa';
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaSearchLocation, FaMoneyBillWave, FaUtensils, FaClock } from "react-icons/fa";

function Hero() {
  const navigate = useNavigate();
  const goToTrip = () => {
    navigate('/createTrip');
  };

  return (
    <div className='bg-gray-900'>
      <div className='flex flex-col items-center justify-center text-center'>
    
        <motion.div 
          className="md:text-7xl text-4xl font-bold md:px-30 px-5 py-10 mt-0 md:mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-blue-400">
            Plan your dream vacation with the power of AI! 😎
          </h1>
          <motion.span 
            className="text-white mt-20 md:text-3xl text-sm font-medium py-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            "Personalized itineraries at your fingertips"
          </motion.span>
        </motion.div>

        <div className="flex gap-10 justify-center mt-5 px-5">
          {[
            { icon: <FaHotel size={40} className="text-orange-400" />, text: "Luxury Hotels" },
            { icon: <FaMapMarkerAlt size={40} className="text-lime-500" />, text: "Tailored Destinations" },
            { icon: <FaCog size={40} className="text-green-400" />, text: "Smart Itineraries" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 * index, type: "spring", stiffness: 100 }}
            >
              {item.icon}
              <p className="mt-2 md:text-xl text-sm text-white font-bold">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.button 
          className='bg-blue-700 hover:bg-blue-400 hover:cursor-pointer hover:shadow-xl hover:shadow-blue-950 text-white font-bold py-3 px-5 rounded-md mt-10'
          onClick={goToTrip}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Get Started, It's Free 🚀
        </motion.button>
      </div>

      <div className="min-h-screen bg-gray-900 text-white py-12 overflow-hidden">
        <div className='bg-blue-400'>
          <motion.div 
            animate={{ x: ["100%", "-240%"] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <p className="text-7xl font-extrabold text-white mb-4 w-fit text-nowrap py-2 bg-blue-400">
              🚀 SAY GOODBYE TO STRESSFUL PLANNING - YOUR DREAM TRIP, AUTOMATED! 🌍✨
            </p>
          </motion.div>
        </div>
        
        <div className='px-4'>
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {[
            { icon: <FaSearchLocation className="text-4xl text-yellow-400" />, title: "What We Do?", text: "We make your travel planning smooth and stress-free. No more ‘where should we go next?’ debates! 🚗", direction: -100 },
            { icon: <FaMoneyBillWave className="text-4xl text-green-400" />, title: "Budget-Friendly Suggestions", text: "We make sure you travel smart, without breaking the bank! 💰", direction: 100 },
            { icon: <FaUtensils className="text-4xl text-red-400" />, title: "Food Spots You Can’t Miss", text: "Because let’s be honest, every trip is secretly about food! 🍔", direction: -100 },
            { icon: <FaClock className="text-4xl text-blue-400" />, title: "Time Optimization", text: "No more 5 AM wake-up calls unless you’re into that. ⏰", direction: 100 },
            { icon: <FaPlaneDeparture className="text-4xl text-purple-400" />, title: "Your Smart Travel Buddy", text: "We handle the planning so you can just enjoy your trip! ✈️", direction: -100 }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: item.direction }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2}} 
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-xl shadow-lg flex items-center gap-4 hover:scale-105 transition-transform"
            >
              {item.icon}
              <div>
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="text-gray-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>

        {/* Final Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5}} 
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }} 
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h2 className="text-3xl font-bold text-blue-400">Ready to Travel Smart?</h2>
          <p className="text-gray-300 mt-2">Plan your next adventure with AI Trip Planner – because the only thing you should worry about is packing snacks. 🍫</p>
          <button className="mt-6 bg-blue-700 hover:bg-blue-400 hover:cursor-pointer hover:shadow-xl hover:shadow-blue-950 text-white font-bold py-3 px-5 rounded-md" onClick={goToTrip}>
            Start Planning 🚀
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
