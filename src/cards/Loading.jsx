import React from 'react'
import { GiMagnifyingGlass } from "react-icons/gi";

function Loading() {
  return (
    <div>
        <div className='flex justify-center h-screen text-9xl text-center m-auto items-center text-white'>
            <GiMagnifyingGlass />
        </div>
    </div>
  )
}

export default Loading