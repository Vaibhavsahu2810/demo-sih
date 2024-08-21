import React from 'react'

function Navbar() {
  return (
    <div className="fixed w-full h-16 px-16 flex justify-center items-center gap-6 bg-slate-300">
      <p className="text-3xl">Logo</p>
      <p>shbj dsbhj hjhxsdbc</p>
      <p>shbj dsbhj</p>
      <p>gbg bbgb gb</p>
      <p>fgghghnghn</p>
      <div className="ml-auto space-x-4">
        <button className="p-2 px-4 border-2 border-black text-black">
          Button
        </button>
        <button className="p-2 px-4 bg-black text-white">
          Button
        </button>
      </div>
    </div>
  );
}

export default Navbar
