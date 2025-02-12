import React from 'react';
import { motion } from 'framer-motion';

function Essentials({ essentialList }) {
  return (
    <div className="mt-15 text-white">
      <h2 className="text-5xl font-bold text-center mb-8 drop-shadow-lg">🎒 Must-Have Travel Essentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-5xl mx-auto">
        {essentialList?.map((essential, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/15 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-5 flex flex-col items-center text-center"
          >
            <div className="text-6xl mb-3 drop-shadow-lg">{essential.Emoji}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{essential.Name}</h3>
            <p className="text-sm italic opacity-80">"Don't leave home without it!"</p>
            <div className="absolute -top-4 -right-4 bg-yellow-300 text-black text-sm px-3 py-1 rounded-full font-bold shadow-md">✔️ Pack Me!</div>
          </motion.div> 
        ))}
      </div>
    </div>
  );
}

export default Essentials;

