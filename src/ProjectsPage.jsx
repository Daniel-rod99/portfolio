import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Project from "./Components/Project";
import BlackJackPNG from "./assets/ProjectsImages/blackJack.png";
import GuitarLa from "./assets/ProjectsImages/guitarla.png";
import WawaKilla from "./assets/ProjectsImages/wawaKilla.png";
import ConsumoCal from "./assets/ProjectsImages/consumoscal.png";

function ProjectsPage() {
  const [offsetValue, setOffsetValue] = useState(-150); // Valor por defecto para md

  useEffect(() => {
    // Función para ajustar el offset basado en el tamaño de la ventana
    function handleResize() {
      if (window.innerWidth >= 1024) {
        // lg: pantalla grande
        setOffsetValue(-300);
      } else if (window.innerWidth >= 768) {
        // md: pantalla mediana
        setOffsetValue(-150);
      } else {
        // sm: pantalla pequeña o por defecto
        setOffsetValue(-100);
      }
    }

    // Llamamos la función cuando el componente se monta
    handleResize();

    // Agregamos un listener para ajustar el offset cuando la ventana cambia de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiamos el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="my-10 text-center">
        <h1 className="text-3xl font-semibold hover:cursor-pointer">
          <Link
            to="projects-section"
            smooth={true}
            duration={500}
            offset={offsetValue} // Offset dinámico basado en el tamaño de pantalla
          >
            Projects
          </Link>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Project
          nameProject="Game 21 BlackJack"
          imageProject={`${BlackJackPNG}`}
          description="This is my first project, a simple card game, marking the beginning of my programming journey, I never uploaded it to GitHub, so there’s no link available."
          gitUrl="https://21blackjackbydaniel.netlify.app"
          demoUrl="https://21blackjackbydaniel.netlify.app"
          technologies={["HTML", "CSS", "JavaScript"]}
        />
        <Project
          nameProject="Web site Fundation"
          imageProject={`${WawaKilla}`}
          description="This is a project for a private foundation, my first paid project."
          gitUrl="https://github.com/Daniel-rod99/fundacion"
          demoUrl="https://wawakilla.netlify.app/"
          technologies={["React", "Tailwind", "React DOM"]}
        />
        <Project
          nameProject="Web Shop"
          imageProject={`${GuitarLa}`}
          description="This project is a shop for selling guitars."
          gitUrl="https://github.com/Daniel-rod99/guitarShop"
          demoUrl="https://guitarshopdanidev.netlify.app"
          technologies={["React", "TypeScript", "useReducer"]}
        />
        <Project
          nameProject="consumption calculator"
          imageProject={`${ConsumoCal}`}
          description="This project is a consumption calculator, with different tips and saving everything in localStorage."
          gitUrl="https://github.com/Daniel-rod99/CalculadoraConsumos"
          demoUrl="https://calculadora-consumos-danidev.netlify.app"
          technologies={["React", "Tailwind", "TypeScript"]}
        />
      </div>
    </>
  );
}

export default ProjectsPage;
