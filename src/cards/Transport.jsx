import React from 'react';
import { motion } from 'framer-motion';

function Transport({ transportList }) {
  return (
    <div className="py-10 mt-15">
      <h2 className="md:text-5xl text-4xl font-bold text-center mb-6 text-white">🚗 Your Ride, Your Way! 🚌</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {transportList?.map((transport, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 shadow-lg rounded-xl hover:shadow-xl p-6 w-72 flex flex-col items-center text-center border border-white/30"
          >
            <span className="text-5xl drop-shadow-lg">{transport.Emoji}</span>
            <h3 className="text-xl font-semibold mt-3 text-white">{transport.Name}</h3>
            <p className="text-gray-300 text-sm mt-2">{transport.Price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Transport;

