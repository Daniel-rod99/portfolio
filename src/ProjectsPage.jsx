import { Link } from "react-scroll";
import Project from "./Components/Project";
import cvProjectImage from "./assets/ProjectsImages/cvProject.png";

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

      <div className="m-7 p-3 text-center h-[35vh]">
        <Project
          nameProject={"Curriculum Creator"}
          imageProject={`${cvProjectImage}`}
        />
      </div>
    </>
  );
}

export default ProjectsPage;
