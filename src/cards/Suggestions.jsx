import React from "react";
import { motion } from "framer-motion";

function Suggestions({ suggestionList }) {
  return (
    <div className="mt-15 py-10">
      <h2 className="md:text-5xl text-4xl font-bold text-center text-white mb-8">
        💡Savvy Traveler Tips!
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {suggestionList?.map((suggestion, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale:0.5}}
            whileInView={{ opacity: 1, scale:1 }} 
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="px-6 py-4 w-4/5 sm:w-96 text-lg font-semibold text-white rounded-xl shadow-lg bg-white/20 border border-white/30 backdrop-blur-lg flex items-center gap-3"
          >
            🌟 {suggestion}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Suggestions;
