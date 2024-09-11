import { Link } from "react-scroll";
import Project from "./Components/Project";

function ProjectsPage() {
  return (
    <>
      <div className="flex flex-col gap-8 px-7">
        <h1 className="text-3xl font-semibold text-center hover:cursor-pointer">
          <Link
            to="projects-section"
            smooth={true}
            duration={500} // duración de la animación en milisegundos
            offset={-100}
          >
            Projects
          </Link>
        </h1>
      </div>

      <Project nameProject={"21 BlackJack Game"} />
    </>
  );
}

export default ProjectsPage;
