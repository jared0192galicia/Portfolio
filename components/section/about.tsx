import cn from "@/service/clsx";
import "tailwindcss/tailwind.css";

export default function About({ className }: any) {
  return (
    <>
      <section
        className={cn(
          "w-screen h-[300px] flex justify-center items-center flex-col",
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
        <h1 className="text-white lg:text-3xl font-semibold">Jared Galicia</h1>
        <p className="text-white text-xs font-extralight">Desarrollador web</p>
        <p className="text-white text-xs font-extralight">
          Desarrollador creativo. Diseño de aplicaciónes
        </p>
        <p className="text-white text-xs font-extralight">
          Deseño de programas. Full Stack ⭐
        </p>
      </section>
      {/* Detalles */}
      <section className="grid gap-2 p-3">
        <div className="text-gray-400 cursor-pointer hover:bg-pink-700 hover:text-white text-center rounded-md text-xs border-white border border-solid ">
          Disponible
        </div>
        <div className="text-gray-400 cursor-pointer hover:bg-pink-700 hover:text-white text-center rounded-md text-xs border-white border border-solid ">
          31 de Octubre
        </div>
        <div className="text-gray-400 cursor-pointer hover:bg-pink-700 hover:text-white text-center rounded-md text-xs border-white border border-solid ">
          Inicio Marzo 2017
        </div>
        <div></div>
      </section>
    </>
  );
}
