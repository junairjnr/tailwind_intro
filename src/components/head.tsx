import React from 'react';
import { useRouter } from "next/navigation";
import { FaEarlybirds } from 'react-icons/fa';
import { SiHellofresh } from 'react-icons/si';
import { CiLogin, CiLogout } from 'react-icons/ci';

function Head() {
    const router = useRouter();
    const welcomePage=()=>{
        router.push('/welcome')
    };
    const signInPage=()=>{
        router.push('/sign-in')
    };
    const signOutPage=()=>{
        router.push('/sign-out')
    };

  return <div className="bg-black w-screen h-16 flex items-center cursor-pointer">
    <div className="w-2/4 h-full flex items-center  pl-4">
        <div className="text-green-500 text-xl flex gap-2 font-bold">
          Logo
          <FaEarlybirds />
        </div>
      </div>
      <div className=" w-2/4  h-full flex items-center justify-end gap-2">
        <div
          onClick={welcomePage}
          className="text-blue-300 flex items-center gap-1 hover:bg-sky-700"
        >
          <SiHellofresh />
          welcome
        </div>
        <div
          onClick={signInPage}
          className="text-green-400  flex items-center gap-1 hover:bg-green-700"
        >
          <CiLogin />
          sign-in{" "}
        </div>
        <div
          onClick={signOutPage}
          className="text-red-400  flex items-center gap-1 hover:bg-red-700"
        >
          <CiLogout />
          sign-out
        </div>
      </div>
    </div>
  
    
         
}

export default Head;
