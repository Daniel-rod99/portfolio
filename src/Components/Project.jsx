import { useState } from "react";
import ProjectModal from "./ProjectModal";
import PropTypes from "prop-types";

function Project({ nameProject, imageProject }) {
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
        className="bg-gradient-to-r from-black via-purple-500 to-black h-[35vh] rounded-2xl hover:cursor-pointer m-7 justify-center flex flex-col items-center"
        onClick={openModal}
      >
        <h1 className="text-center">{nameProject}</h1>
        <div className="w-[250px] h-[220px] relative bg-white rounded-2xl">
          <img
            className="w-full h-full object-contain"
            src={imageProject}
            alt="Project Image"
          />
        </div>
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
  nameProject: PropTypes.string.isRequired,
  imageProject: PropTypes.string.isRequired,
};

export default Project;
