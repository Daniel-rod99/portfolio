import { useState, useEffect } from "react";
import Skills from "./Components/Skills";
import { Link } from "react-scroll";

function About() {
  const [offsetValue, setOffsetValue] = useState(-300); // Valor por defecto para lg

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
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-semibold text-center md:pt-7 hover:cursor-pointer">
          <Link
            to="about-section"
            smooth={true}
            duration={500} // Duración de la animación en milisegundos
            offset={offsetValue} // Offset dinámico
          >
            About Me
          </Link>
        </h1>
        <p className="text-center mx-7">
          I’m Daniel Rodriguez, a junior web developer with a passion for both
          front-end and back-end technologies. I’m constantly learning and
          exploring new tools and frameworks to create innovative web solutions.
          Currently based in Milan, Italy, I’m eager to grow my skills and
          contribute to exciting projects.
        </p>
      </div>

      <div className="mt-24 text-xl text-center my-7">
        <h2>My Skills</h2>
      </div>

      <div className="md:mb-24 lg:mb-0">
        <Skills />
      </div>
    </>
  );
}

export default About;
