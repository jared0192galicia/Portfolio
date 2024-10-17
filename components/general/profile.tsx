import cn from "@/service/clsx";
import "@/styles/animation.css";
import { useRouter } from "next/navigation";
import React from "react";

type fact = {
  data: string;
  icon: string;
  href?: string;
};

export default function Profile({ className }: any) {
  const router = useRouter();
  const factAbout: fact[] = [
    { data: "Disponible", icon: "" },
    { data: "31 de Octubre", icon: "" },
    { data: "Inicio Marzo 2017", icon: "" },
    { data: "Perfumes", icon: "", href: "/fragances" },
    { data: "Gatos", icon: "" },
    { data: "Gym", icon: "" },
  ];

  return (
    <>
      <section
        className={cn(
          "wscreen h-[300px] flex justify-center items-center flex-col",
          className
        )}
      >
        <ul className="w-screen md:w-[65vw] h-full tecnology overflow-hidden relative lg:min-h-full">
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm"
            style={{ backgroundImage: "url('/icon/desktop.jpeg')" }}
          ></div>
          <li>
            <img src={"/icon/react.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/hono.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/node.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/bun.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/tailwind.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/ts.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/java.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/prime.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/mySQL.png"} alt={"alt"} />
          </li>
          <li>
            <img src={"/icon/git.png"} alt={"alt"} />
          </li>
        </ul>
        <picture className="w-5/6 md:w-3/6 h-24 relative">
          <img
            className="w-24 h-24 md:w-32 md:h-32 rounded-full absolute bottom-2 text-white lg:-bottom-14"
            src="/icon/profile.jpg"
            alt="Foto de perfil"
          ></img>
        </picture>
      </section>
      {/* Precentación */}
      <section className="px-7 pt-3">
        <h1 className="text-white lg:text-2xl font-semibold">Jared Galicia</h1>
        <p className="text-white text-xs md:text-sm md:font-light font-extralight">
          Desarrollador web
        </p>
        <p className="text-white text-xs md:text-sm md:font-light font-extralight">
          Desarrollador creativo. Diseño de aplicaciónes
        </p>
        <div className="text-white text-xs md:text-sm md:font-light font-extralight">
          Diseño de programas. Full Stack
          <div className="inline-block animate-bounce">⭐</div>
        </div>
      </section>
      {/* Detalles */}
      <section className="grid grid-cols-3 gap-2 p-3">
        {factAbout.map((fact: fact, index) => (
          <React.Fragment key={index}>
            <div
              className={cn(
                "cursor-pointer hover:bg-pink-700 hover:text-white lg:h-6",
                "rounded-md text-xs border-white border border-solid",
                "lg:flex lg: justify-center items-center",
                "text-center text-gray-400"
              )}
              onClick={() => {
                fact.href ? router.push(fact.href) : "";
              }}
            >
              {fact.data}
            </div>
          </React.Fragment>
        ))}
      </section>
    </>
  );
}
