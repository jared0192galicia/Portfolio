import cn from "@/service/clsx";
import { useState } from "react";

export default function Accordion({ title, children }: any) {
  // Estado para controlar si el acordeón está abierto o cerrado
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Maneja el clic para alternar el estado abierto/cerrado
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg">
      <div
        className={cn(
          "text-white w-full px-4 py-2 text-left flex justify-between",
          "hover:cursor-pointer hover:text-fuchsia-500",
          { "text-cyan-500": isOpen }
        )}
        onClick={toggleOpen}
      >
        {title}
        <img src="/icon/arrow_drop_down.svg" alt="Down arrow icon" />
      </div>
      <div
        className={cn(
          "transition-all duration-300 overflow-hidden ml-5 border-l border-cyan-600",
          {
            "max-h-screen p-4 block": isOpen,
            "max-h-0 p-0 rounded-b-lg": !isOpen,
          }
        )}
      >
        {children}
      </div>
    </div>
  );
}
