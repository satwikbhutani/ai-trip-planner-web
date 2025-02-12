import React from 'react'
import { PiGlobeStandFill } from "react-icons/pi";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div>
        <div className='flex justify-start items-center p-1 m-1 text-3xl text-white'>
            <PiGlobeStandFill />
            <div className='flex-col'>
            <span className='font-bold text-4xl pl-0.5 text-white'>ATLAS</span>
            <span className='text-xs font-bold'>  BY SATWIK BHUTANI</span>
            </div>
        </div>
    </div>
  )
}

export default Logo