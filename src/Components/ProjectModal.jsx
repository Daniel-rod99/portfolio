import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

function ProjectModal({ isOpen, onClose, nameProject }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={onClose} // Cierra el modal cuando se hace clic en el fondo
        >
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg max-w-md mx-auto"
            initial={{ scale: 0 }} // Estado inicial para la animación de aparición
            animate={{ scale: 1 }} // Estado final (mostrando el modal)
            exit={{ scale: 0 }} // Animación de salida, reduciendo el modal
            transition={{ duration: 0.3 }} // Duración de la animación
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
          >
            <h2 className="text-xl font-semibold mb-4">{nameProject}</h2>
            <p className="mb-4">
              Este es un proyecto de un juego de blackjack. Contiene una
              implementación de lógica para jugar al 21 con múltiples jugadores.
            </p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={onClose} // Cierra el modal al hacer clic en el botón
            >
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

ProjectModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  nameProject: PropTypes.string.isRequired,
};

export default ProjectModal;
