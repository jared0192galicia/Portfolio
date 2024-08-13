import cn from '@/service/clsx';
import 'tailwindcss/tailwind.css';

export default function Navbar(props: any) {
  const baseItemClasses = 'w-1/3 sm:w-1/4 text-center py-5';
  const textClass = `text-cyan-500`;
  const hoverClass =
    'hover:text-fuchsia-500 hover:cursor-pointer transition-colors duration-500';

  return (
    <>
      <ul
        className={cn(
          'bg-sky950 flex flex-col sm:flex-row xl:px-20 sticky top-0',
          props.className
        )}
      >
        <li className={cn(baseItemClasses, textClass, hoverClass)}>Sobre mi</li>
        <li className={cn(baseItemClasses, textClass, hoverClass)}>
          Habilidades
        </li>
        <li className={cn(baseItemClasses, textClass, hoverClass)}>
          Experiencia
        </li>
        <li className={cn(baseItemClasses, textClass, hoverClass)}>Contacto</li>
      </ul>
    </>
  );
}
