import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaHeart, FaGlobe, FaPaperPlane, FaEnvelope } from 'react-icons/fa';
import Logo from './logo';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-purple-800 text-white py-12 px-6 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-8xl text-white/20 opacity-30">
        <FaGlobe />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
        <div className="mb-6 md:mb-0">
          <Logo/>
          <p className="mt-2 text-gray-200 text-lg">Navigate. Explore. Experience.</p>
        </div>

        <div className="flex gap-6 text-2xl mt-5">
          <a href="https://www.instagram.com/satwik_bhutani/" target="_blank" className="hover:text-yellow-300 transition duration-300"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/satwikbhutani/" target="_blank" className="hover:text-blue-500 transition duration-300"><FaLinkedin /></a>
          <a href="https://wa.me/919773770145" target="_blank" className="hover:text-green-400 transition duration-300"><FaWhatsapp /></a>
          <a href="mailto:satwikbhutani_it22a10_24@dtu.ac.in" target="_blank" className="hover:text-red-400 transition duration-300"><FaEnvelope /></a>
          <a href="https://github.com/satwikbhutani" target="_blank" className="hover:text-gray-300 transition duration-300"><FaGithub /></a>
        </div>
        <div className="mt-10 text-center text-gray-300 text-sm">
            <p>© {new Date().getFullYear()} Atlas. All Rights Reserved.</p>
            <p className="text-gray-400 flex items-center justify-center gap-2 mt-1">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Satwik Bhutani
            </p>
        </div>
      </div>

      <div className="absolute bottom-0 right-70 text-6xl text-white/20 opacity-30 animate-float">
        <FaPaperPlane />
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s infinite ease-in-out;
          }
        `}
      </style>

    </footer>
  );
}

export default Footer;
