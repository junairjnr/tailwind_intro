"use client";
import React from "react";
import Leftmenu from "@/components/leftmenu";
import Head from "@/components/head";

const Home = () => {
 
  return (
    <div>
      <div className=" h-screen">
        <Head/>

        <div className="w-screen h-full flex  bg-slate-900 ">
       <Leftmenu/>


          <div className='h-full flex items-center justify-center w-5/6 text-center cursor-pointer '>
            <div className='text-blue-500 h-full p-2 cursor-pointer '>
              CONTACT US!!
            </div>
          </div>
        </div>

        <div className='w-screen bg-black flex items-center h-16 justify-end text-zinc-200'>
          <div className='ml-auto mr-8'>DATASTONE SOLUTIONS</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
