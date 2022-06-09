import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon, 
  PaperAirplaneIcon, 
  ServerIcon,
} from '@heroicons/react/solid';
import brandImg from '../assets/brand-bg.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex flex-col justify-between'>
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique something and something</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
          <p className="text-2xl"> This is our brand.</p>
          <button className="py-3 px-8 sm:w-[60%]">Get started.</button>
        </div>
        <div>
          <img className='w-full' src={brandImg} alt="/" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[70%] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-100 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data services</p>
          <div className="flex justify-between flex-wrap px-4">
            <div className="flex px-4 py-2 text-slate-500"><CloudUploadIcon className="h-6 text-orange-400"/> App Security</div>
            <div className="flex px-4 py-2 text-slate-500"><DatabaseIcon className="h-6 text-orange-400"/> Dashboard Design</div>
            <div className="flex px-4 py-2 text-slate-500"><ServerIcon className="h-6 text-orange-400"/>Cloud data</div>
            <div className="flex px-4 py-2 text-slate-500"><PaperAirplaneIcon className="h-6 text-orange-400"/> API</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;