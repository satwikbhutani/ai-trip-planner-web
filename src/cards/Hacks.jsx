import React from 'react';
import { motion } from 'framer-motion';

function Hacks() {
  return (
    <div className="py-12">
      <h2 className="text-5xl font-bold text-center text-white mb-12">
        😉 Pro Hacks By The Developer!
      </h2>
      <div className="relative w-full flex flex-col items-center gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x:0 }} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-4xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xl font-semibold py-5 px-8 rounded-3xl shadow-xl"
        >
          <span className="absolute -top-7 md:right-10 right-1 text-5xl">🎒</span>
          "Pack light... until you see the souvenir shop!" 💸
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x:0 }} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-4xl bg-gradient-to-r from-green-500 to-teal-600 text-white text-xl font-semibold py-5 px-8 rounded-3xl shadow-xl"
        >
          <span className="absolute -top-7 md:right-10 right-1 text-5xl">🚶‍♂️</span>
          "Never trust a ‘5 min walk’ unless you’re an athlete." 😂
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x:0 }} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-4xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xl font-semibold py-5 px-8 rounded-3xl shadow-xl"
        >
          <span className="absolute -top-7 md:right-10 right-1 text-5xl">🔑</span>
          "Lost? Act like you belong there. Confidence is key!" 😎
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x:0 }} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-4xl bg-gradient-to-r from-red-500 to-pink-600 text-white text-xl font-semibold py-5 px-8 rounded-3xl shadow-xl"
        >
          <span className="absolute -top-7 md:right-10 right-1 text-5xl">📶</span>
          "Check WiFi before checking in. Priorities matter." 🏨
        </motion.div>
      </div>
    </div>
  );
}

export default Hacks;
