import 'tailwindcss/tailwind.css';
import Navbar from '../../components/home/navbar';
import Presentation from '../../components/home/presentation';
import About from '../../components/home/about';

export default function Home() {
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
