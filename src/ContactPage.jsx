import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ContactPage() {
  const classIcons = "flex gap-1 items-center text-[50px]";
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-semibold hover:cursor-pointer">
          <Link to="contact-section" smooth={true} duration={500} offset={-100}>
            Contact
          </Link>
        </h1>
      </div>

      <motion.div className="flex justify-evenly m-full py-10">
        <motion.button>
          <motion.a
            className={classIcons}
            href=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
        </motion.button>
        <motion.button>
          <a
            className={classIcons}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </motion.button>
        <motion.button>
          <a
            className={classIcons}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMailBulk />
          </a>
        </motion.button>
      </motion.div>
    </>
  );
}

export default ContactPage;
