"use client";
// import "@/styles/globals.css";
// import "tailwindcss/tailwind.css";
import Navbar from "@/components/general/navbar";
import Profile from "@/components/general/profile";
import Sections from "@/components/general/sections";
import { useMachine } from "@xstate/react";
import { navigationMachine } from "./stores/machineNavigator";
import Footer from "@/components/general/footer";
import Head from "next/head";
export default function Home() {
  const [state, send] = useMachine(navigationMachine);
  return (
    <>
      <Head>
        <title>Home</title>
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <main>
        <section className="bg-gradient-to-b from-sky-950 to-gray-950">
          <div className="z-50 sticky -top-2 w-full h-12 bg-gray-950 opacity-75 blur-sm"></div>
          <div className="md:w-[65vw] my-0 mx-auto max-w-[840px]">
            <Profile></Profile>
            <Navbar send={send} className="hover:text-cyan-100" />
            <Sections state={state}></Sections>
          </div>
          <Footer></Footer>
        </section>
        {/* <div className="h-screen w-screen bg-gradient-to-t from-cyan-950 to-gray-950"></div> */}
      </main>
    </>
  );
}
