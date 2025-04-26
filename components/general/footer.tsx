import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // Librería para íconos

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información de contacto */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">Contáctame</h2>
            <p className="text-gray-400">
              Email:{" "}
              <a
                href="mailto:jared0192galicia@gmail.com"
                className="hover:text-white transition-colors"
              >
                jared0192galicia@gmail.com
              </a>
            </p>
            {/* <p className="text-gray-400">Teléfono: +52 123 456 7890</p> */}
          </div>

          {/* Redes Sociales con íconos */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/jared0192galicia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jared-galicia-a67825228/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            {/* <a
              href="https://wa.me/529513436551"
              className="hover:text-green-600 transition-colors"
              target="_blank"
            >
              <FaWhatsapp />
            </a> */}
          </div>
        </div>

        {/* Separador */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Derechos de autor */}
        <div className="text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Jared Galicia. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
