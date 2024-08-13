import cn from '@/service/clsx';
import 'tailwindcss/tailwind.css';
// import ''

export default function About(props: any) {
  return (
    <>
      <section className="w-1/2 h-[400px] bg-slate-300 flex items-center justify-center">
        <ul className="flex flex-col items-center space-y-4">
          <li className="overflow-auto max-w-10 max-h-10 duration-1000 animate-spin-fast ">
            <img src={'/icon/react.png'} alt={'alt'} className="w-10 h-10" />
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
