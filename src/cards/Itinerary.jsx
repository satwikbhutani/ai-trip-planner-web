import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapSigns } from 'react-icons/fa';
import { Link } from 'react-router';

function Itinerary({ itineraryList }) {
  return (
    <div className="mt-15">
      <h1 className="md:text-5xl text-4xl font-bold text-center text-white mb-8">
        🗺️ Your Travel Itinerary
      </h1>
      {itineraryList?.map((itinerary, index) => (
        <div key={index} className="mb-5">
          <h2 className="text-3xl font-bold text-center text-blue-400 py-4 mb-1">
            📅 Day {itinerary.Day}
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {itinerary?.Plan?.map((plan, ind) => (
              <Link to={'https://www.google.com/maps/search/?api=1&query='+plan?.PlaceName} target='_blank'>
              <motion.div
                key={ind}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }} 
                whileHover={{ scale: 1.07}}
                transition={{ duration: 0.5 }}
                
                className="relative w-80 backdrop-blur-lg bg-white/3 border h-full border-blue-500/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-blue-200">
                    <FaClock className="text-blue-500 text-xl" />
                    <span className="text-lg font-semibold">{plan.Time}</span>
                  </div>
                  <div className="text-green-400 text-3xl">
                    <FaMapSigns />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{plan.PlaceName}</h3>
                <p className="italic text-gray-400 text-center text-sm">"{plan.PlaceDetails}"</p>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Itinerary;
