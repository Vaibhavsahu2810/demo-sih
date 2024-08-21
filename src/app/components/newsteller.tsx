import React from "react";

function Newsteller() {
  return (
    <div className="py-16 px-12 flex justify-between items-center">
      <div className="space-y-3 flex-1">
        <p className="text-4xl font-extrabold">
          Stay updated with our newsteller
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet illum
          officiis dolores quas quos explicabo.
        </p>
      </div>
      <div className="ml-auto ">
        <div className="flex gap-4">
          <button className="p-4 px-16 border border-black text-black">
            Sign up
          </button>
          <button className="p-4 px-16 bg-slate-700 text-white">Sign up</button>
        </div>
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, aut.</p>
      </div>
    </div>
  );
}

export default Newsteller;
