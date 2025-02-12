import React, { useRef } from 'react'
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import { LuLogOut } from "react-icons/lu";
import { MdTravelExplore } from "react-icons/md";

function SignIn() {
    const [showPopover, setShowPopover] = useState(false);
    const popoverRef = useRef(null);


    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")))
    const login = useGoogleLogin({
        onSuccess: async (response) => {
            console.log("Access Token:", response.access_token);
            localStorage.setItem("google_access_token", response.access_token);

            try {
                const userInfo = await axios.get(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                {
                    headers: { Authorization: `Bearer ${response.access_token}` },
                }
        );

        console.log("User Info:", userInfo.data);
        setUser(userInfo.data);
        localStorage.setItem('user',JSON.stringify(userInfo.data));
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
        onError: (error) => console.log("Login Failed:", error),
    });
    const logout = () => {
        localStorage.removeItem('user',null);
        setUser(null);
    }

    if(user==null){
        return(
            <div>
                <button className="flex justify-center items-center bg-gradient-to-r from-blue-700/0 to-blue-700/30 shadow-lg hover:shadow-xl hover:scale-103 border-white hover:cursor-pointer text-white font-bold py-2 px-4 m-2 rounded-md"
                    onClick={() => login()}
                >
                    <span className='text-2xl drop-shadow-lg'><FcGoogle /></span>&nbsp; Sign in with Google
                </button>
            </div>
        )
    }
    else{
        const temp=JSON.parse(localStorage.getItem("user"))
        return(
            <div className='flex justify-center items-center text-white'>
                <button onClick={() => setShowPopover(!showPopover)}>
                <div className='flex justify-center items-center text-white hover:cursor-pointer drop-shadow-md'>
                <img 
                    src={temp.picture} alt="User Profile" 
                    className={`rounded-full w-10 h-10 ${showPopover? 'ring-4 ring-lime-400 border-1 border-black': 'border-2 border-blue-200 hover:border-lime-400'}`}
                    onError={(e) => (e.target.src = "./robot.png")}
                />
                <h3 className='text-xl font-bold sm:block hidden'>👋 Hi, {temp.name}!</h3>
                </div>
                </button>
                {showPopover && (
                    <div ref={popoverRef} className="absolute font-bold right-0 top-14 text-lg mt-2 w-60 shadow-lg rounded-lg z-10 text-black px-1 bg-gradient-to-r from-blue-100 to-blue-700 py-1">
                        <a
                            href='/myTrips'
                            className='w-full'
                        >
                        <div className='py-2 px-5 flex items-center gap-2 hover:bg-white/50 rounded w-full hover:cursor-pointer'>
                            <MdTravelExplore />
                            <span>My Trips!</span>
                        </div>
                        </a>
                        <div className='border m-1'></div>
                        <button
                            onClick={logout}
                            className='w-full'
                        >
                        <div className='py-2 px-5 flex items-center gap-2 hover:cursor-pointer hover:bg-red-600/90 bg-red-600/50 text-white w-full rounded'>
                            <LuLogOut />
                            <span>Logout</span>
                        </div>
                        </button>
                    </div>
                )}
            </div>
        )
    }
}

export default SignIn