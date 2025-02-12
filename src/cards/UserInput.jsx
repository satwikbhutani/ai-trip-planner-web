import React from 'react';

function UserInput({ user }) {
  return (
    <div className="py-20 text-white text-center space-y-6 mb-10">
      <h1 className="md:text-9xl text-7xl text-gray-900 drop-shadow-[0_0_45px_rgba(100,100,255)] font-bold md:mb-20 mb-7">&nbsp; {user?.destination?.toUpperCase()} &nbsp;</h1>
      <div className='flex justify-between px-10 flex-wrap items-center text-center'>
      <p className="md:text-xl text-xs font-semibold bg-white/10 md:px-5 px-2 py-2 rounded-full mb-2">
        ⏳ Duration: <span className="text-blue-300">{user?.duration || "N/A"}</span>
      </p>
      
      <p className="md:text-xl text-xs font-semibold bg-white/10 md:px-5 px-2 py-2 rounded-full mb-2">
        👥 Group Size: <span className="text-green-300">{user?.groupSize || "N/A"}</span>
      </p>
      
      <p className="md:text-xl text-xs font-semibold bg-white/10 md:px-5 px-2 py-2 rounded-full mb-2">
        💰 Budget: <span className="text-yellow-300">{user?.budget || "N/A"}</span>
      </p>
      
      <p className="md:text-xl text-xs font-semibold bg-white/10 md:px-5 px-2 py-2 rounded-full mb-2">
        ✨ Trip Type: <span className="text-purple-300">{user?.tripType || "N/A"}</span>
      </p>
      </div>
    </div>
  );
}

export default UserInput;
