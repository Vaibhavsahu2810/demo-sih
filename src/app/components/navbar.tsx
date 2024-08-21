import React from 'react'

function Navbar() {
  return (
    <div className="fixed w-full h-16 px-16 flex justify-center items-center gap-6 bg-slate-300">
    <p className="text-3xl">Logo</p>
    <p className='text-lg font-medium'>Learning Pathways</p>
    <p className='text-lg font-medium'>Community Support</p>
    <p className='text-lg font-medium'>Personailsed Trainings</p>
    <p className='text-lg font-medium'>Live Webinars</p>
    <div className="ml-auto space-x-4">
      <button className="p-2 px-4 border-2 border-black text-black">
        Login
      </button>
      <button className="p-2 px-4 bg-black text-white">
        Sign Up
      </button>
    </div>
  </div>
  );
}

export default Navbar