'use client';
import React from 'react';
import 'tailwindcss/tailwind.css';

export default function Navbar() {
  const start = <h1 className="text-gray-300 text-3xl font-semibold select-none hover:text-gray-100 cursor-pointer">Jared</h1>;
  const end = (
    <div>
      <ul className="text-gray-400 w-3/4 flex justify-around select-none">
        <li className="mx-4 hover:text-gray-300 cursor-pointer">HOME</li>
        <li className="mx-4 hover:text-gray-300 cursor-pointer">ABOUT</li>
        <li className="mx-4 hover:text-gray-300 cursor-pointer">SERVICES</li>
        <li className="mx-4 hover:text-gray-300 cursor-pointer">WORKS</li>
        <li className="mx-4 hover:text-gray-300 cursor-pointer">BLOG</li>
        <li className="mx-4 hover:text-gray-300 cursor-pointer">TESTIMONIAL</li>
        <li className="mx-4 hover:text-gray-300 cursor-pointer">CONTACT</li>
      </ul>
    </div>
  );
  

  return (
    <>
      <nav className="flex justify-around bg-slate-900 py-7 shadow-2xl surface-card sticky top-0 z-10 bg-gradient-to-b to-blue-950 from-slate-900">
        <section>{start}</section>
        <section>{end}</section>
      </nav>
    </>
  );
}
