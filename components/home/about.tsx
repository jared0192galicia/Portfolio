'use client';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';
import dev from '@images/presentationBg.png';
export default function About() {
  const [profession, setProfession] = useState<string>('Web Developer');

  return (
    <>
      <section className="w-screen h-screen bg-[#262626]">
        <div className="flex justify-center h-3/5 items-center">
          <img
            className="w-1/5 aspect-square rounded-full border border-8 border-gray-500"
            src={dev.src}
            alt="Fto del desarrollador"
          />
        </div>
        <section className="flex gap-9 mx-32">
          <div className="w-1/2">
            <h2 className="text-gray-200 text-3xl font-semibold">
              Hi There! I'm Jared Galicia
            </h2>
            <p className="text-gray-400 text-lg">
              I am a 19 year old creative web programmer who lives in Oaxaca
              Mexico. Specialized in design and development of interfaces for
              web and desktop platforms. Developed with the most current web
              development standards.
            </p>
          </div>
          <div className="w-1/2">
            <ul className="text-gray-200">
              <li className="my-4">
                Typecript
                <div className="bg-gray-400 w-full h-2 border">
                  <div className="bg-gray-700 w-3/4 h-2"></div>
                </div>
              </li>
              <li className="my-4">
                React
                <div className="bg-gray-400 w-full h-2 border">
                  <div className="bg-gray-700 w-2/4 h-2"></div>
                </div>
              </li>
              <li className="my-4">
                HTML/CSS3
                <div className="bg-gray-400 w-full h-2 border">
                  <div className="bg-gray-700 w-4/5 h-2"></div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
}
