import cn from '@/service/clsx';
import 'tailwindcss/tailwind.css';
// import ''

export default function About(props: any) {
  const bottomFromTop = 'h-full';
  return (
    <>
      <section className="w-1/2 h-[400px] bg-slate-300 flex items-center justify-center">
        <ul className="flex flex-row items-center space-y-4 border border-cyan-800 w-full h-full">
          <li className={cn("overflow-auto w-full h-full duration-1000 animate-slide-fade", bottomFromTop)}>
            <img src={'/icon/react.png'} alt={'alt'} className="w-10 h-10 animate-spin-fast" />
          </li>
          <li className={cn("overflow-auto w-full h-full duration-1000 animate-slide-fade", bottomFromTop)}>
            <img src={'/icon/hono.png'} alt={'alt'} className="w-10 h-10 animate-spin-fast" />
          </li>
          <li className={cn("overflow-auto w-full h-full duration-1000 animate-slide-fade", bottomFromTop)}>
            <img src={'/icon/node.png'} alt={'alt'} className="w-10 h-10 animate-spin-fast" />
          </li>
          <li className={cn("overflow-auto w-full h-full duration-1000 animate-slide-fade", bottomFromTop)}>
            <img src={'/icon/bun.png'} alt={'alt'} className="w-10 h-10 animate-spin-fast" />
          </li>
        </ul>
      </section>
    </>
  );
}

const CustomListItem: React.FC<{ delay: string; src: string; alt: string }> = ({
  delay,
  src,
  alt,
}) => {
  return (
    <li
    // className="animate-slideUpRotate"
    // style={{ '--delay': delay } as React.CSSProperties}
    >
      <img src={src} alt={alt} className="max-w-10 max-h-10" />
    </li>
  );
};
