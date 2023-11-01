import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../../components/home/navbar';
// import Navbar from '@componentsHome/navbar';
import Presentation from '../../components/home/presentation';
import About from '../../components/home/about';

export default function Home(props: any) {
  return (
    <>
      <main className='bg-gradient-to-b from-slate-950 to-slate-900'>
        <Navbar></Navbar>
        <Presentation></Presentation>
        <About></About>
      </main>
    </>
  );
}
