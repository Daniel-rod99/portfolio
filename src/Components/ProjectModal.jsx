import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [{ id: 1, title: "Item 1", subtitle: "Subtitle 1" }];

function AnimatedItems() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          className="p-4 mb-4 border cursor-pointer"
          onClick={() => setSelectedId(item.id)}
          style={{ backgroundColor: "#f0f0f0", borderRadius: "10px" }}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center"
            style={{ backgroundColor: "#fff", borderRadius: "10px" }}
          >
            {/** Encuentra el item seleccionado */}
            {items.map(
              (item) =>
                item.id === selectedId && (
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
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AnimatedItems;
