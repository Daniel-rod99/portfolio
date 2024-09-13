import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Prueba() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, title: "Titulo1", subtitle: "Subtitulo" },
    { id: 2, title: "Titulo2", subtitle: "Subtitulo" },
    { id: 3, title: "Titulo3", subtitle: "Subtitulo" },
  ];

  // Efecto para bloquear/desbloquear el scroll
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedId]);

  return (
    <>
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 text-center h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              className="p-4 mb-4 cursor-pointer gap-3 flex flex-col bg-white rounded-2xl shadow-md"
              onClick={() => setSelectedId(item.id)}
            >
              <motion.h5 className="text-sm sm:text-base">
                {item.subtitle}
              </motion.h5>
              <motion.h2 className="text-lg sm:text-xl">{item.title}</motion.h2>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              key="modal"
              layoutId={selectedId}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            >
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg max-w-lg w-full mx-4 my-4"
                style={{ maxHeight: "calc(100vh - 40px)" }} // Para mantener el margen superior e inferior
              >
                {items
                  .filter((item) => item.id === selectedId)
                  .map((item) => (
                    <div key={item.id}>
                      <motion.h5 className="text-lg">{item.subtitle}</motion.h5>
                      <motion.h2 className="text-xl">{item.title}</motion.h2>
                      <motion.button
                        className="mt-4 p-2 bg-blue-500 text-white rounded"
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </motion.button>
                    </div>
                  ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Prueba;
