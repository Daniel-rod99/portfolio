import Skills from "./Components/Skills";
import { Link } from "react-scroll";

function About() {
  return (
    <>
      <div className="flex flex-col gap-8 px-7">
        <h1 className="text-3xl font-semibold text-center mt-[2rem] hover:cursor-pointer">
          <Link
            to="about-section"
            smooth={true}
            duration={500} // duración de la animación en milisegundos
            offset={-100}
          >
            About Me
          </Link>
        </h1>
        <p className="text-center">
          I’m Daniel Rodriguez, a junior web developer with a passion for both
          front-end and back-end technologies. I’m constantly learning and
          exploring new tools and frameworks to create innovative web solutions.
          Currently based in Milan, Italy, I’m eager to grow my skills and
          contribute to exciting projects.
        </p>
      </div>

      <div className="text-center my-7 text-xl mt-24">
        <h2>My Skills</h2>
      </div>

      <div>
        <Skills />
      </div>
    </>
  );
}

export default About;
