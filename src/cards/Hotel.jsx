import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import { Link } from 'react-router';

function Hotel({ hotelList }) {
  return (
    <>
      <h1 className="md:text-5xl text-4xl font-bold text-center text-white md:mb-3 mb-1">
        🏨 Luxurious Stays Await!
      </h1>
      <div className="flex flex-wrap justify-center gap-5 p-6">
        {hotelList?.map((hotel, index) => (
          <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.HotelName+', '+hotel?.HotelAddress} target='_blank'>
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 0.95 }} 
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.7}}
            
            className="relative w-80 backdrop-blur-lg bg-white/5 border h-full border-white/20 rounded-2xl overflow-hidden shadow-lg hover:border-2 hover:border-blue-500"
          >
            <img
              src={hotel.HotelImageUrl}
              alt="Hotel"
              onError={(e) => (e.target.src = "https://st2.depositphotos.com/3725083/5485/i/450/depositphotos_54856347-stock-photo-travel-the-world-monument-concept.jpg")}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">{hotel.HotelName}</h2>
              <div className="flex items-center text-blue-500">
                <FaMapMarkerAlt className="mr-2" />
                <span className="text-sm">{hotel.HotelAddress}</span>
              </div>
              <div className="flex justify-between items-center mt-3">
                <span className="flex items-center bg-yellow-400 text-black px-3 py-1 rounded-lg shadow-sm">
                  <FaStar className="mr-1" /> {hotel.Rating}
                </span>
                <span className="flex items-center bg-green-500 px-3 py-1 rounded-lg shadow-sm text-white">
                  <FaMoneyBillWave className="mr-1" /> {hotel.Price}
                </span>
              </div>
              <p className="text-sm italic text-gray-500 mt-2">“{hotel.Description}”</p>
            </div>
            <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
              Per Night + Taxes
            </div>
          </motion.div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Hotel;