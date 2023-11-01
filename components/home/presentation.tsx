'use client';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';

export default function Presentation() {
  const [profession, setProfession] = useState<string>('');
  const [classCursor, setClassCursor] = useState<string>('typing');
  const [textArray] = useState<string[]>(['hard', 'fun', 'a journey', 'LIFE']);
  const [typingDelay] = useState<number>(100);
  const [erasingDelay] = useState<number>(100);
  const [newTextDelay] = useState<number>(2000); // Delay between current and next text
  const [textArrayIndex, setTextArrayIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    // if (textArray.length) setTimeout(type, newTextDelay + 250);
  }, []);

  const type = () => {
    if (charIndex <= textArray[textArrayIndex].length) {
      // if (classCursor != 'typing') setClassCursor('typing');
      setProfession(profession + textArray[textArrayIndex].charAt(charIndex));
      setCharIndex(charIndex + 1);
      setTimeout(type, typingDelay);
    } else {
      // setClassCursor('');
      setTimeout(erase, newTextDelay);
    }
  };

  const erase = () => {
    if (charIndex > 0) {
      setProfession(textArray[textArrayIndex].substring(0, charIndex - 1));
      setCharIndex(charIndex - 1);
      setTimeout(erase, erasingDelay);
    } else {
      setTextArrayIndex(textArrayIndex + 1);
      if (textArrayIndex >= textArray.length) setTextArrayIndex(0);
      setTimeout(type, typingDelay + 1100);
    }
  };

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
