'use client';
import 'tailwindcss/tailwind.css';
// import './TypingAnimation.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { useEffect, useState } from 'react';
export default function Presentation() {
  const [profession, setProfession] = useState<string>('Web Developer');

  return (
    <>
      <section className="w-screen h-screen flex flex-col justify-center absolute top-0">
        <h1 className="text-gray-200 text-6xl font-extrabold text-center">
          Hi! I'm Jared Gal
        </h1>
        <h2 className="text-gray-200 text-4xl font-medium text-center py-10">
          A Professional{' '}
          <div className="inline-block font-extrabold">{profession}</div>
        </h2>
      </section>
    </>
  );
}
