import { useState } from "react";
import ProjectModal from "./ProjectModal";
import PropTypes from "prop-types";

function Project({ nameProject }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla si el modal está abierto

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-red-300 h-[35vh] rounded-2xl hover:cursor-pointer m-7"
        onClick={openModal}
      >
        <p className="text-center">{nameProject}</p>
        <div>previsuailacion</div>
      </div>

      {/* Renderiza el modal si isModalOpen es true */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        nameProject={"hola"}
      />
    </>
  );
}

Project.propTypes = {
  nameProject: PropTypes.func.isRequired,
};

export default Project;
