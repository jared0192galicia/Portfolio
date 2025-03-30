import cn from "@/service/clsx";
import Animate from "@/utils/animation";

export default function About() {
  const baseClassName: string =
    "text-justify text-white p-5 py-0 font-light text-sm";
  const headingClassName: string = "text-2xl font-bold mb-4 text-center";
  const paragraphClassName: string = "mb-4 leading-relaxed";

  return (
    <section className="py-8">
      <h2 className={cn(baseClassName, headingClassName)}>
        ¡Hola! Te cuento sobre mí
      </h2>
      <Animate>
        <p className={cn(baseClassName, paragraphClassName)}>
          Soy Jared Galicia, un apasionado desarrollador web con experiencia en
          la creación de aplicaciones robustas y eficientes tanto en frontend
          como en backend. Me especializo en el uso de tecnologías modernas como
          React, TypeScript, Node.js, y más recientemente, he trabajado con
          Bun.js y Hono para optimizar el rendimiento de mis aplicaciones.
        </p>
      </Animate>
      <Animate>
        <p className={cn(baseClassName, paragraphClassName)}>
          Constantemente me gusta investigar acerca de nuevas tecnologías para
          potenciar mis aplicaciones. Mi objetivo es siempre estar al tanto de
          las últimas tendencias y herramientas que puedan mejorar mi trabajo,
          sin entorpecer el avance sobre mis proyectos actuales.
        </p>
      </Animate>
      <Animate>
        <p className={cn(baseClassName, paragraphClassName)}>
          Además de la programación, disfruto mantenerme activo físicamente y me
          apasionan los videojuegos. Siempre estoy buscando un equilibrio entre
          mi vida profesional y mis pasatiempos para mantenerme motivado y
          saludable.
        </p>
      </Animate>
    </section>
  );
}
