// import "@/styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/general/navbar";
import Profile from "@/components/general/profile";
import Sections from "@/components/general/sections";
export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-sky-950 to-gray-950">
        <div className="z-50 sticky -top-2 w-full h-12 bg-gray-950 opacity-75 blur-sm"></div>
        <Profile></Profile>
        <Navbar className="hover:text-cyan-100" />
        <Sections></Sections>
      </section>
      <div className="h-screen w-screen bg-gradient-to-t from-cyan-950 to-gray-950"></div>
    </main>
  );
}
