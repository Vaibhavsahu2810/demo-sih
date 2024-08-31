import React from "react";

export const Header = () => {
  return (
    <section className="p-12 pt-24 px-24 w-full flex justify-between items-center gap-16">
      <h1 className="font-heading text-5xl flex-1">
        Empower Your Career With AI-Driven Job Matches
      </h1>
      <div className="flex-1">
        <p className="pb-4">
          Find the perfect job opportunities and develop your skills with our
          AI-powered platform.
        </p>
        <div className="flex gap-4">
          <button className="bg-black p-3 px-10 text-white">Learn More</button>
          <button className="p-3 px-10 border border-black">Signup</button>
        </div>
      </div>
    </section>
  );
};
