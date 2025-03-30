import cn from "@/service/clsx";
import Animate from "@/utils/animation";
import React, { ReactNode } from "react";

export default function Projects() {
  return (
    <div className="flex gap-3 flex-wrap justify-center h-auto items-center">
      <Project
        url="https://tienda.preslow.app/"
        name="Ecommerce"
        image="./projects/preslow-ecommerce.png"
        description="Ecommerce diseñado para la venta de productoa a el público en genereal con herramientas adicionales para los distribuidores autorizados por la empresa"
      ></Project>
      <Project
        url="https://preslow.app/"
        name="Portal"
        image="./projects/preslow-app.png"
        description="Portal para la administración de información interna, adaptada a las necesidades de los usuarios."
      ></Project>
      <Project
        name="Punto de venta"
        image="./icon/bun.png"
        description="Punto de venta distribuido con informacion centralizada para el uso de multiples puntos de venta con stock compartido"
      ></Project>
      <div className="py-10"></div>
    </div>
  );
}

function Project({ name, image, description, url='' }: any): ReactNode {
  return (
    <Animate
      className={cn(
        "flex flex-col items-center p-4 rounded-2xl shadow-lg",
        "w-[calc(100vw-20px)] md:w-4/5 border border-gray-600"
      )}
    >
      <h2 className="mt-4 text-xl font-semibold text-gray-300">{name}</h2>
      <a
        href={url}
        target="_blank"
        className="w-full md:w-1/2 rounded-md object-cover cursor-pointer"
      >
        <img
          className="w-full rounded-md"
          src={image}
          alt="Nombre de la persona"
          // onClick={}
        />
      </a>
      <p className="text-gray-500 mt-2 text-justify">{description}</p>
    </Animate>
  );
}
