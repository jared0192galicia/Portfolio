import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import Navbar from '@/components/general/navbar';
import About from '@/components/section/about';
export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-b from-sky-950 to-gray-950">
        <Navbar className="hover:text-cyan-100" />
        <About></About>
        {/* <div className="h-screen w-screen"></div> */}
      </section>
      <div className="h-screen w-screen bg-gradient-to-t from-cyan-950 to-gray-950"></div>
      {/* <div className="h-72 w-screen bg-gradient-to-t from-cyan-950 to-gray-950"></div> */}
    </main>
  );
}
