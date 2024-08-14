import cn from "@/service/clsx";
import "tailwindcss/tailwind.css";
// import ''

export default function About({ className }: any) {
  return (
    <>
      <section
        className={cn(
          "w-screen h-[300px] flex justify-center items-center flex-col",
          className
        )}
      >
        <ul className="w-[65vw] h-full tecnology overflow-hidden relative ">
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

        <picture className="w-3/6 h-24 ">
          <img
            className="w-32 h-32 rounded-full absolute top-56 text-white"
            src="/icon/profile.jpg"
            alt="Foto de perfil"
          ></img>
        </picture>
      </section>
    </>
  );
}
