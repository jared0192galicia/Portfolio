'use client'
import cn from "@/service/clsx";
import { useState } from "react";

export default function Navbar(props: any) {
  const [toggle, setToggle] = useState<boolean>(false);
  const baseItemClasses = "w-1/3 sm:w-1/4 text-center py-5";
  const textClass = `text-cyan-500`;
  const hoverClass =
    "hover:text-fuchsia-500 hover:cursor-pointer transition-colors duration-500";

  return (
    <>
      <button
        className="bg-cover w-10 min-h-8 lg:hidden bg-[url('/icon/menu.png')] md:hidden"
        onClick={() => setToggle(!toggle)}
      ></button>
      <ul
        className={cn(
          "bg-sky-950 md:flex flex-col sm:flex-row xl:px-20 sticky top-0 hidden",
          props.className,
          { flex: toggle }
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
      {/* </nav> */}
    </>
  );
}
