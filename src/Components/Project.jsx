import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const classFramwork =
  "bg-[var(--grey)] text-[var(--white)] px-1 rounded-lg text-sm";

function Project({ nameProject, imageProject }) {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el clic fuera del modal
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      setIsOpen(false); // Cierra el modal
    }
  };

  // Deshabilitar el scroll cuando el modal esté abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div>
      <motion.div
        layoutId="project"
        className="p-3 mb-4 cursor-pointer gap-3 flex flex-col"
        onClick={() => setIsOpen(true)} // Abre el modal al hacer clic
      >
        <motion.h5>{nameProject}</motion.h5>
        <motion.img
          src={imageProject}
          className="h-[25vh] object-contain bg-white rounded-2xl"
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="modal-container" // ID para detectar clics fuera del modal
            layoutId="project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick} // Detecta clics fuera del modal
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#0c0a15] bg-opacity-50 z-50"
          >
            <motion.div
              className="w-[350px] h-[70vh] bg-white flex flex-col items-center justify-center rounded-2xl p-5"
              onClick={(e) => e.stopPropagation()} // Evitar que los clics dentro del modal cierren el modal
            >
              <div className="text-center text-black flex flex-col gap-3">
                <motion.h1>{nameProject}</motion.h1>
                <motion.img
                  src={imageProject}
                  className="h-[20vh] object-contain"
                />
                <motion.p>
                  This project was created to allow users to easily build a
                  resume by simply entering their information, and then download
                  it as a PDF.
                </motion.p>

                <div className="flex justify-between mt-5">
                  <p className={classFramwork}>React</p>
                  <p className={classFramwork}>Tailwind</p>
                  <p className={classFramwork}>Vite</p>
                  <p className={classFramwork}>Motion</p>
                </div>

                <motion.div className="flex justify-evenly m-full pt-6">
                  <motion.button>
                    <a className="flex gap-1" href="https://www.google.it">
                      <FaGithub />
                      GitHub
                    </a>
                  </motion.button>
                  <motion.button>
                    <a className="flex gap-1" href="https://www.google.it">
                      Demo
                      <LiaExternalLinkAltSolid />
                    </a>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Project.propTypes = {
  nameProject: PropTypes.string.isRequired,
  imageProject: PropTypes.string.isRequired,
};

export default Project;
