import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importamos framer-motion
import { Link } from "react-scroll";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Deshabilitar el scroll cuando el modal esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Variantes para animar el modal y el contenido de la página
  const modalVariants = {
    closed: { x: "100%" }, // El modal se mueve hacia fuera de la pantalla (derecha)
    open: { x: 0 }, // El modal cubre la pantalla
  };

  const contentVariants = {
    closed: { x: 0 }, // El contenido se mantiene en su lugar
    open: { x: "-100%" }, // El contenido se desplaza hacia la izquierda
  };

  // Variantes para transformar el menú hamburguesa en una flecha
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 },
  };

  const arrowVariants = {
    closed: { opacity: 0, rotate: -90 },
    open: { opacity: 1, rotate: 0 },
  };

  const handleLinkClick = () => {
    toggleMenu(); // Cierra el menú
  };

  return (
    <>
      {/* Botón del menú hamburguesa */}
      <button className="block md:hidden z-50" onClick={toggleMenu}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          {/* Línea superior */}
          <motion.path
            d="M4 6h16"
            variants={topLineVariants}
            initial="closed"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />

          {/* Línea del medio */}
          <motion.path
            d="M4 12h16"
            variants={middleLineVariants}
            initial="closed"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />

          {/* Línea inferior */}
          <motion.path
            d="M4 18h16"
            variants={bottomLineVariants}
            initial="closed"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </motion.svg>
      </button>

      {/* Modal con animación, se muestra cuando isOpen es true */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={modalVariants}
        transition={{ type: "tween", duration: 0.4 }} // Transición suave, sin rebote
        className="fixed inset-0 bg-[var(--fondo)] z-40 flex justify-center items-center"
      >
        {/* Flecha para cerrar el menú */}
        <button className="absolute top-5 left-5" onClick={toggleMenu}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-white"
            variants={arrowVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
          >
            <motion.path
              d="M15 19l-7-7 7-7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </motion.svg>
        </button>

        {/* Nav dentro del modal */}
        <nav className="text-white text-2xl">
          <ul className="flex flex-col items-center space-y-4">
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="home-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-150}
                onClick={handleLinkClick} // Cierra el menu hamburguesa
              >
                Home
              </Link>
            </li>
            <li className="hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="about-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-100}
                onClick={handleLinkClick} // Cierra el menu hamburguesa
              >
                About
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="projects-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-100}
                onClick={handleLinkClick} // Cierra el menu hamburguesa
              >
                Projects
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="contact-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-120}
                onClick={handleLinkClick} // Cierra el menu hamburguesa
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </motion.div>

      {/* Contenido de la página que se mueve hacia la izquierda */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={contentVariants}
        transition={{ type: "tween", duration: 0.4 }} // Transición suave, sin rebote
        className="relative z-10"
      >
        {/* Aquí va el contenido de tu página */}
      </motion.div>
    </>
  );
}

export default HamburgerMenu;
