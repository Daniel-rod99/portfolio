import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importamos framer-motion
import { Link } from "react-scroll";
import PropTypes from "prop-types";

function HamburgerMenu({ isDark }) {
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

  // Variantes para animar el modal y el contenido de la página con efecto de desaceleración al final
  const modalVariants = {
    closed: {
      x: "100%",
      transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
    }, // El modal se mueve hacia fuera de la pantalla (derecha)
    open: {
      x: 0,
      transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
    }, // El modal cubre la pantalla
  };

  // Variantes para transformar el menú hamburguesa en una "X"
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 4, transition: { duration: 0.3 } },
  };

  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0, transition: { duration: 0.3 } },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8, transition: { duration: 0.3 } },
  };

  // Variantes para animar las opciones del menú (li) escalonadamente
  const menuItemVariants = {
    closed: (index) => ({
      opacity: 0,
      y: 20,
      transition: {
        delay: index * 0.1, // Retardo para cada li según su índice
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
    open: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1 + 0.3, // Retardo escalonado con un inicio más tarde
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  const handleLinkClick = () => {
    toggleMenu(); // Cierra el menú
  };

  return (
    <>
      {/* Botón del menú hamburguesa */}
      <button className="block md:hidden z-50 relative" onClick={toggleMenu}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`w-8 h-8`}
        >
          {/* Línea superior */}
          <motion.path
            d="M4 6h16"
            variants={topLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"} // Animación según el estado del modal
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          {/* Línea de medio */}
          <motion.path
            d="M4 12h16"
            variants={middleLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"} // Animación según el estado del modal
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          {/* Línea inferior */}
          <motion.path
            d="M4 18h16"
            variants={bottomLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"} // Animación según el estado del modal
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
        transition={{ type: "tween", duration: 0.8 }} // Transición suave con desaceleración
        className={`${
          isDark === "dark" ? "bg-black" : "bg-white"
        } fixed inset-0 z-40 flex justify-center items-center`}
      >
        {/* Nav dentro del modal */}
        <nav className=" text-2xl">
          <ul className="flex flex-col items-center space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                className="hover:text-[var(--violet)] cursor-pointer"
                custom={index} // Pasamos el índice como prop para el retardo escalonado
                variants={menuItemVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
              >
                <Link
                  to={`${item.toLowerCase()}-section`}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={handleLinkClick}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}

HamburgerMenu.propTypes = {
  isDark: PropTypes.string.isRequired,
};
export default HamburgerMenu;
