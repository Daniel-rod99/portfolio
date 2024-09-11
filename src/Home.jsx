import ImageProfile from "./Components/ImageProfile";
import About from "./About";
import ProjectsPage from "./ProjectsPage";
import Arrow from "./Components/Arrow";
import { Element } from "react-scroll";

function Home() {
  return (
    <>
      <Element
        name="home-section"
        className="element mt-32 md:h-[100vh] md:flex md:flex-col md:justify-center"
      >
        <div className="px-7 // md:flex  md:items-center md:px-7 md:justify-center md:gap-14">
          <div>
            <ImageProfile />
          </div>
          <div className="w-auto flex flex-col text-center mt-10 gap-3 // md:w-[20rem]">
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

      <Element name="about-section" className="element h-[100vh]">
        <About />
      </Element>

      <Element name="projects-section" className="element h-[100vh]">
        <ProjectsPage />
      </Element>
    </>
  );
}

export default Home;
