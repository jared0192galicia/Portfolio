"use client";
import cn from "@/service/clsx";
import { useState } from "react";

export default function Navbar(props: any) {
  const [selected, setSelected] = useState<"" | "About" | "Experience" | "Contact" | "Hability">("");
  const baseItemClasses = "w-1/3 sm:w-1/4 text-center py-5";
  const textClass = `text-cyan-500`;
  const hoverClass =
    "hover:text-fuchsia-500 hover:cursor-pointer transition-colors duration-500";
  const selectedClass: string = "bg-gradient-to-b from-gray-800 to- rounded-sm";

  return (
    <>
      <ul
        className={cn(
          "flex flex-row xl:px-20",
          props.className
          // { flex: toggle }
        )}
      >
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-red-600": selected == "About",
            [selectedClass]: selected == "About",
          })}
          onClick={() => setSelected("About")}
        >
          Sobre mi
        </li>
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-red-600": selected == "Hability",
            [selectedClass]: selected == "Hability",
          })}
          onClick={() => setSelected("Hability")}
        >
          Habilidades
        </li>
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-red-600": selected == "Experience",
            [selectedClass]: selected == "Experience",
          })}
          onClick={() => setSelected("Experience")}
        >
          Experiencia
        </li>
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-red-600": selected == "Contact",
            [selectedClass]: selected == "Contact",
          })}
          onClick={() => setSelected("Contact")}
        >
          Contacto
        </li>
      </ul>
      {/* </nav> */}
    </>
  );
}
