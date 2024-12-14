import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

function Skills() {
  return (
    <>
      <motion.div className="grid w-auto grid-cols-4 gap-8 px-7 justify-items-center">
        <div>
          <Icon icon="devicon:html5" className="text-5xl md:text-7xl" />
        </div>
        <div>
          <Icon icon="devicon:css3" className="text-5xl md:text-7xl" />
        </div>
        <div>
          <Icon icon="devicon:javascript" className="text-5xl md:text-7xl" />
        </div>
        <div>
          <Icon icon="devicon:tailwindcss" className="text-5xl md:text-7xl" />
        </div>
        <div>
          <Icon icon="devicon:react" className="text-5xl md:text-7xl" />
        </div>
        <div>
          <Icon icon="devicon:typescript" className="text-5xl md:text-7xl" />
        </div>
        <div>
          <Icon icon="devicon:mysql" className="text-5xl md:text-7xl" />
        </div>
        <div>
          <Icon icon="devicon:mongodb" className="text-5xl md:text-7xl" />
        </div>
      </motion.div>
    </>
  );
}

export default Skills;
