
import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <div className=" w-full h-16 px-16 flex justify-center items-center gap-6 bg-slate-300">
    <Link href={"/"}><p className="text-3xl">Logo</p></Link>

    <Link href={"/LearningPathway"}><p className='text-lg font-medium'>Learning Pathways</p></Link>
    <Link href={"/Community"}><p className='text-lg font-medium'>Community Support</p></Link>
   <Link href={"/trainings"}> <p className='text-lg font-medium'>Personailsed Trainings</p></Link>
    <Link href={"/trending"}><p className='text-lg font-medium'>Trendings</p> </Link>
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