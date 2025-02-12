import React, { useState, useRef, useEffect } from 'react';
import Logo from './logo.jsx';
import { FaGoogle, FaEnvelope } from 'react-icons/fa';
import SignIn from './signin.jsx'
import { Link } from 'react-router-dom';

function Header() {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (popoverRef.current && !popoverRef.current.contains(event.target)) {
  //       setShowPopover(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  return (
    <div 
      className="flex flex-wrap justify-between items-center px-4 py-2 bg-gradient-to-b from-blue-950 to-gray-900 sticky top-0 z-10"
      // style={{ backgroundImage: "url('https://wallpapers.com/images/hd/blue-stars-c9j1lmi44zdxhwtb.jpg')" }}
    >
      <a href="/" className='hover:cursor-default'>
      <div className="flex-shrink-0">
        <Logo />
      </div>
      </a>
      <div className="relative">
        
          <SignIn/>
      </div>
    </div>
  );
}

export default Header;


