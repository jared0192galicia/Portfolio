import cn from "@/service/clsx";
import Animate from "@/utils/animation";
import React, { ReactNode } from "react";

export default function Projects() {
  return (
    <div className="flex gap-3 flex-wrap justify-center h-auto items-center my-10">
      <Project
        url="https://preslow.com/"
        name="Ecommerce"
        image="./projects/preslow-ecommerce.webp"
        description="Ecommerce diseñado para la venta de productos para el público en genereal con herramientas adicionales para que los distribuidores autorizados por la empresa puedan realizar pedidos grandes sin estar sujetos a Stock"
      ></Project>
      <Project
        url="https://preslow.app/"
        name="Portal"
        image="./projects/preslow-app.webp"
        description="Portal para la administración de información interna, adaptada a las necesidades de los diferentes usuarios."
      ></Project>
      <Project
        name="API REST"
        image="./projects/api-rest.webp"
        description="API REST diseñada para satisfacer las necesidades operativas de una empresa, desarrollada con una arquitectura escalable y preparada para manejar diversos desafíos externos."
      ></Project>
      <div className="py-10"></div>
    </div>
  );
}

function Project({ name, image, description, url = "-1" }: any): ReactNode {
  const getImage = () => {
    return (
      <img
        className="w-full rounded-md"
        src={image}
        alt="Nombre de la persona"
      />
    );
  };

  return (
    <Animate
      className={cn(
        "flex flex-col items-center p-4 rounded-2xl shadow-lg",
        "w-[calc(100vw-20px)] md:w-4/5 border border-gray-600"
      )}
    >
      <h2 className="mt-4 text-xl font-semibold text-gray-300 mb-3">{name}</h2>

      {url == "-1" ? (
        <div className="w-full md:w-1/2 rounded-md object-cover cursor-pointer">
          {getImage()}
        </div>
      ) : (
        <a
          href={url}
          target="_blank"
          className="w-full md:w-1/2 rounded-md object-cover cursor-pointer"
        >
          {getImage()}
        </a>
      )}
      <p className="text-gray-400 text-justify mt-3 px-4">{description}</p>
    </Animate>
  );
}
