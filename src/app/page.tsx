import 'tailwindcss/tailwind.css';
import Navbar from '../../components/home/navbar';
import Presentation from '../../components/home/presentation';
import About from '../../components/home/about';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Presentation></Presentation>
      <About></About>
    </>
  );
}
