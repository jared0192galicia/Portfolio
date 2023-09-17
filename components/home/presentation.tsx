'use client';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';

export default function Presentation() {
  const [profession, setProfession] = useState<string>('Web Developer');

  return (
    <>
      <section className="w-screen h-screen bg-slate-900 bg-fixed flex flex-col justify-center top-0">
        <h1 className="text-gray-200 text-6xl font-extrabold text-center">
          {"Hi! I'm Jared Gal"}
        </h1>
        <h2 className="text-gray-200 text-4xl font-medium text-center py-10">
          A Professional
        </h2>
      </section>
    </>
  );
}
