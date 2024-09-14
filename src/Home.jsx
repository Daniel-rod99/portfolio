import ImageProfile from "./Components/ImageProfile";
import About from "./About";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Arrow from "./Components/Arrow";
import { Element } from "react-scroll";

function Home() {
  return (
    <>
      <div className="relative">
        <Element
          name="home-section"
          className="element pt-[132px] md:h-screen md:flex md:flex-col md:justify-center"
        >
          <div className="px-7 // md:flex  md:items-center md:px-7 md:justify-center md:gap-14">
            <div>
              <ImageProfile />
            </div>
            <div className="pt-7 w-auto flex flex-col text-center gap-3 // md:w-[20rem] md:pt-0">
              <h1 className="font-semibold text-3xl">Full Stack Developer</h1>
              <p>
                Hi, I’m Danidev and I’m passionate about web development. Feel
                free to scroll down to learn more about me. 👋🏼
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Arrow />
          </div>
        </Element>

        <Element name="about-section" className="element h-screen">
          <About />
        </Element>

        <Element name="projects-section" className="element h-full md:h-screen">
          <ProjectsPage />
        </Element>

        <Element name="contact-section" className="element h-screen">
          <ContactPage />
        </Element>
      </div>
    </>
  );
}

export default Home;
