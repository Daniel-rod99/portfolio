import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const items = [{ id: 1 }];

function Project({ nameProject, imageProject }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className="p-3 mb-4 cursor-pointer gap-3 flex flex-col"
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{nameProject}</motion.h5>
          <motion.img
            src={imageProject}
            className="h-[25vh] object-contain bg-white rounded-2xl"
          ></motion.img>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            key={selectedId} // Usa selectedId como clave única
            layoutId={selectedId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center"
            style={{ backgroundColor: "#fff", borderRadius: "10px" }}
          >
            {/** Encuentra el item seleccionado */}
            {items
              .filter((item) => item.id === selectedId)
              .map((item) => (
                <div key={item.id} className="text-center">
                  <motion.h5>{item.subtitle}</motion.h5>
                  <motion.h2>{item.title}</motion.h2>
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Close
                  </motion.button>
                </div>
              ))}
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
