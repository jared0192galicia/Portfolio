import {
  FaCode,
  FaDatabase,
  FaFileInvoiceDollar,
  FaJava,
  FaPaypal,
  FaReact,
  FaShopify,
  FaUniversity,
} from "react-icons/fa";
import { MdLockReset } from "react-icons/md";
import { SiHandlebarsdotjs, SiXstate } from "react-icons/si";
import Preslow from "@/public/preslow_est.svg";
import Animate from "@/utils/animation";
export default function Experience() {
  return (
    <section className="border-l ml-4 mt-7">
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">06/2025</h2>
            <span className="ml-2 text-sm text-gray-400">
              Plataforma de recepción de facturas
            </span>
            <FaFileInvoiceDollar className="ml-2 text-green-600" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Se implementó una plataforma donde proveedores pueden
            subir facturas que son procesadas automáticamente para extraer su
            información. La empresa receptora accede a esta información
            estructurada, puede añadir comentarios en un chat por factura y
            gestionar complementos relacionados.
          </p>
        </Item>
      </Animate>

      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">05/2025</h2>
            <span className="ml-2 text-sm text-gray-400">
              Reportes antidoping
            </span>
            <FaUniversity className="ml-2 text-yellow-500" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Se implementó y desplego una plataforma para generar reportes de
            antidoping para la Universidad de la Sierra Sur en una red interna
            de la universidad.
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">09/2024</h2>
            <span className="ml-2 text-sm text-gray-400">
              Implementar pago por
            </span>
            <FaPaypal className="ml-2 text-blue-500" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Se implementó la funcionalidad de pago utilizando la API de PayPal
            para permitir a los usuarios realizar transacciones de manera
            segura.
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">08/2024</h2>
            <span className="ml-2 text-sm text-gray-400">
              Realizar checkout en ecommerce
            </span>
            <FaShopify className="ml-2 text-yellow-500" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Se implemeto todo el apartado de checkout para completar una compra
            desde el registro de direcciones
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">08/2024</h2>
            <span className="ml-2 text-sm text-gray-400">
              ¿Olvidaste tu contraseña?
            </span>
            <MdLockReset className="ml-2 text-cyan-500" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Implemetar sistema para recuperar contraseña mediante un enlace
            temporal enviado a un correo correo asociado
          </p>
        </Item>
      </Animate>

      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">07/2024</h2>
            <span className="ml-2 text-sm text-gray-400">
              Correos dinamicos
            </span>
            <SiHandlebarsdotjs className="ml-2 text-yellow-900" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Generar plantillas de correos electronicos usando Handlebars
          </p>
        </Item>
      </Animate>

      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">07/2024</h2>
            <span className="ml-2 text-sm text-gray-400">
              Procesamiento de datos
            </span>
            <FaDatabase className="ml-2 text-sky-500" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Generar reportes de mercacia en especifico a base de miles de
            registros y diferentes tablas de datos SQL
          </p>
        </Item>
      </Animate>

      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">07/2024</h2>
            <span className="ml-2 text-sm text-gray-400">Practicas en </span>
            {/* <SiHandlebarsdotjs className="ml-2 text-yellow-900" size={24} /> */}

            <Preslow className="ml-2" width={80} height={30} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Realizar primeras practicas universitarias en Preslow S.A de C.V.
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">03/2024</h2>
            <span className="ml-2 text-sm text-gray-400">
              Implementar XState
            </span>
            <SiXstate className="ml-2 text-white" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Implementar XState como maquina de estados para realizar peticiones
            mediante axios y llevar el control de errores
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">01/2023</h2>
            <span className="ml-2 text-sm text-gray-400">
              Punto de venta en
            </span>
            <FaJava className="ml-2 text-sky-600" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Desarrollar un sistema POS usando Java Servlets y JSP <br />
            Base de datos gestionada solo con procedimientos almacenados de
            MySQL
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">07/2023</h2>
            <span className="ml-2 text-sm text-gray-400">Becario en </span>
            <Preslow className="ml-2" width={80} height={30} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Inicié y gestioné una estancia en Preslow, donde trabajé en
            proyectos y desarrollé habilidades en React, node y Express.
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">05/2023</h2>
            <span className="ml-2 text-sm text-gray-400">Inicios en </span>
            <FaReact className="ml-2 text-cyan-500" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Inicios de desarrollo en React y Typescript
          </p>
        </Item>
      </Animate>
      <Animate>
        <Item>
          <div className="flex items-center">
            <h2 className="text-lg font-bold text-white">04/2017</h2>
            <span className="ml-2 text-sm text-gray-400">Inicios en </span>
            <FaJava className="ml-2 text-sky-600" size={24} />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            Inicios de desarrollo en Java POO
          </p>
        </Item>
      </Animate>
      {/* <Item>
        <div className="flex items-center">
          <h2 className="text-lg font-bold text-yellow-400">05/2023</h2>{" "}
          <span className="ml-2 text-sm text-gray-200 font-semibold italic">
            ¡Encontré mi pasión!
          </span>
          <FaCode className="ml-2 text-green-400 animate-bounce" size={28} />{" "}
        </div>
        <p className="mt-2 text-base text-white font-bold">
          El inicio de mi camino en la programación.
        </p>
      </Item> */}
      <Animate>
        <Item>
          <div className="fle itemscenter p-3 border border-yellow-400 rounded-lg bg-gray-800 shadow-lg">
            <div className="flex items-center">
              <h2 className="text-lg font-bold text-yellow-400">03/2017</h2>
              {/* Cambiamos el color del texto para resaltar */}
              <span className="ml-2 text-sm text-gray-300">
                ¡Encontré mi pasión!
              </span>
              <FaCode
                className="ml-2 text-green-400 animate-bounce"
                size={28}
              />
              {/* Icono más grande y con animación */}
            </div>
            <p className="mt-2 text-base text-white font-bold">
              El inicio de mi camino en la programación.
            </p>
          </div>
        </Item>
      </Animate>

      {/* <Item>
        <div className="flex items-center p-3 border border-yellow-400 rounded-lg bg-gray-800 shadow-lg">
          <h2 className="text-lg font-bold text-white">05/2023</h2>
          <span className="ml-2 text-sm text-gray-300">
            ¡Encontré mi pasión!
          </span>
          <FaCode className="ml-2 text-green-500" size={24} />
        </div>
        <p className="mt-2 text-sm text-gray-300">
          El inicio de mi camino en la programación.
        </p>
      </Item> */}
    </section>
  );
}

function Item({ children }: any) {
  return (
    <div className="flex items-start gap-3 relative right-1 z-20">
      <div className="min-w-2 min-h-2 bg-white rounded-full mt-2"></div>
      <div className="text-white pb-5">{children}</div>
    </div>
  );
}
