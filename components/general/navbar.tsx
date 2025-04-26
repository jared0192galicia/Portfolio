"use client";
import cn from "@/service/clsx";
import { useState } from "react";

export default function Navbar({ className, send }: any) {
  const [selected, setSelected] = useState<
    "About" | "Experience" | "Contact" | "Skills" | "projects"
  >("About");
  const baseItemClasses = "min-w-24 w-1/4 text-center pt-5 pb-2";
  const textClass = `text-cyan-500`;
  const hoverClass =
    "hover:text-fuchsia-500 hover:cursor-pointer transition-colors duration-500";
  const selectedClass: string = "border-b-2 border-fuchsia-500 roundedmd";

  return (
    <>
      <ul className={cn("flex flex-row xl:px-20 overflow-x-scroll", className)}>
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-white": selected == "About",
            [selectedClass]: selected == "About",
          })}
          onClick={() => {
            send({ type: "GO_TO_ABOUT" });
            setSelected("About");
          }}
        >
          Sobre mi
        </li>
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-white": selected == "Skills",
            [selectedClass]: selected == "Skills",
          })}
          onClick={() => {
            send({ type: "GO_TO_SKILLS" });
            setSelected("Skills");
          }}
        >
          Habilidades
        </li>
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-white": selected == "Experience",
            [selectedClass]: selected == "Experience",
          })}
          // onClick={() => setSelected("Experience")}
          onClick={() => {
            send({ type: "GO_TO_EXPERIENCE" });
            setSelected("Experience");
          }}
        >
          Experiencia
        </li>
        <li
          className={cn(baseItemClasses, textClass, hoverClass, {
            "text-white": selected == "Contact",
            [selectedClass]: selected == "Contact",
          })}
          onClick={() => {
            send({ type: "GO_TO_PROJECTS" });
            setSelected("projects");
          }}
        >
          Proyectos
        </li>
      </ul>
      {/* </nav> */}
    </>
  );
}
