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
            duration={500}
            offset={-120}
          >
            Projects
          </Link>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Project
          nameProject="CV Builder"
          imageProject={`${cvProjectImage}`}
          description="This is a React project where users can create a resume and download it as a PDF."
          gitUrl="https://www.google.it"
          demoUrl="https://cv-daniel-rodriguez.netlify.app"
          technologies={["React", "Vite", "NextUI", "Tailwind"]}
        />
        <Project
          nameProject="E-commerce App"
          imageProject="Image Project"
          description="lorem jshdkjshjdkfhjsdhfhskdjdjfshdkfjksd skdjfhd fkjsdhf shdk djkhs dkfhsd f"
          gitUrl="https://www.google.it"
          demoUrl="https://cv-daniel-rodriguez.netlify.app"
          technologies={["react", "php", "html", "css"]}
        />
        <Project
          nameProject="Portfolio Website"
          imageProject="https://via.placeholder.com/150"
          description="hola desde la descripcion"
          gitUrl="https://www.google.it"
          demoUrl="https://cv-daniel-rodriguez.netlify.app"
          technologies={["react", "php", "html", "css"]}
        />
        <Project
          nameProject="Portfolio"
          imageProject="https://via.placeholder.com/150"
          description="lorem jshdkjshjdkfhjsdhfhskdjdjfshdkfjksd skdjfhd fkjsdhf shdk djkhs dkfhsd f"
          gitUrl="https://www.google.it"
          demoUrl="https://cv-daniel-rodriguez.netlify.app"
          technologies={["react", "php", "html", "css"]}
        />
      </div>
    </>
  );
}

export default ProjectsPage;
