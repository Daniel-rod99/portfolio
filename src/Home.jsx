import { useScroll, motion, useTransform } from "framer-motion";
import ImageProfile from "./Components/ImageProfile";
import About from "./About";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Arrow from "./Components/Arrow";
import { Element } from "react-scroll";

function Home() {
  const { scrollYProgress } = useScroll();

  // Transformations for ImageProfile
  const xImage = useTransform(scrollYProgress, [0, 0.3], [0, -395]);
  const yImage = useTransform(scrollYProgress, [0, 0.3], [0, -200]);

  // Transformations for text
  const xText = useTransform(scrollYProgress, [0, 0.3], [0, -750]);
  const yText = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  // Transformations for arrow
  const xArrow = useTransform(scrollYProgress, [0, 0.3], [0, -735]);
  const yArrow = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const rotateArrow = useTransform(scrollYProgress, [0, 0.3], [0, -90]);

  return (
    <>
      <motion.div className="relative grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-8 lg:mx-[4rem]">
        {/* screen lg */}
        <div className="hidden lg:block // lg:justify-center lg:col-span-7 lg:row-span-2">
          <Element
            name="home-section"
            className="element pt-[132px] lg:h-screen lg:flex lg:flex-col"
          >
            {/* Animated ImageProfile */}
            <motion.div
              style={{ x: xImage, y: yImage }}
              className="fixed left-[30rem] top-[25rem]"
            >
              <ImageProfile />
            </motion.div>

            {/* Animated Text */}
            <motion.div
              style={{ x: xText, y: yText }}
              className="pt-7 flex flex-col text-center gap-3 lg:w-[20rem] lg:pt-0 fixed left-[50rem] top-[30rem]"
            >
              <h1 className="text-3xl font-semibold">Full Stack Developer</h1>
              <p>
                Hi, I’m Danidev and I’m passionate about web development. Feel
                free to scroll down to learn more about me. 👋🏼
              </p>
            </motion.div>

            {/* Animated Arrow */}
            <motion.div
              style={{ x: xArrow, rotate: rotateArrow, y: yArrow }}
              className="flex justify-center fixed left-[55rem] top-[40rem]"
            >
              <Arrow />
            </motion.div>
          </Element>
        </div>

        {/* screen sm */}
        <div className="lg:hidden">
          <Element
            name="home-section"
            className="element pt-[132px] md:h-screen md:flex md:flex-col md:justify-center md:col-span-4 md:row-span-2"
          >
            <motion.div className="px-7 md:flex md:items-center md:px-7 md:justify-center md:gap-14">
              <motion.div>
                <ImageProfile />
              </motion.div>

              <motion.div className="pt-7 w-auto flex flex-col text-center gap-3 md:w-[20rem] md:pt-0">
                <h1 className="text-3xl font-semibold">Full Stack Developer</h1>
                <p>
                  Hi, I’m Danidev and I’m passionate about web development. Feel
                  free to scroll down to learn more about me. 👋🏼
                </p>
              </motion.div>
            </motion.div>

            <motion.div className="flex justify-center">
              <Arrow />
            </motion.div>
          </Element>
        </div>

        <motion.div className="hidden lg:block w-[400px] lg:col-span-2 lg:row-span-6 lg:row-start-3"></motion.div>

        <Element
          name="about-section"
          className="m-auto element lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-3"
        >
          <About />
        </Element>

        <Element
          name="projects-section"
          className="element lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-5"
        >
          <ProjectsPage />
        </Element>

        <Element
          name="contact-section"
          className="element lg:col-span-4 lg:row-span-2 lg:col-start-3 lg:row-start-7"
        >
          <ContactPage />
        </Element>
      </motion.div>
    </>
  );
}

export default Home;
