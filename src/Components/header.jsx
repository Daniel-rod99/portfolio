import PropTypes from "prop-types";
import HamburgerMenu from "./HamburguerMenu";
import { Link } from "react-scroll";
import Switcher from "../Switcher";
import { useState, useEffect } from "react";

function Header() {
  const [isDark, setIsDark] = useState("dark");

  useEffect(() => {
    document.body.className =
      isDark === "dark" ? "bg-black text-white" : "bg-white text-black";
  }, [isDark]);

  const darkMode = `${
    isDark === "dark"
      ? "dark bg-background text-white"
      : "light bg-white text-black"
  }`;

  return (
    <header className={`${darkMode} fixed top-0 left-0 w-full shadow-md z-10`}>
      <div className="w-auto h-[10vh] flex justify-between px-7 items-center">
        <h1 className="font-bold md:text-3xl text-2xl hover:cursor-pointer">
          <Link
            to="home-section"
            smooth={true}
            duration={900} // duración de la animación en milisegundos
            offset={-5000}
          >
            DaniDev
          </Link>
        </h1>

        <div className="flex items-center">
          <div className="md:hidden ">
            <Switcher isDark={isDark} setIsDark={setIsDark} />
          </div>
          {/* Componente del menú hamburguesa */}
          <HamburgerMenu isDark={isDark} setIsDark={setIsDark} />
        </div>

        <nav className="lg:w-[500px] md:w-96 text-xl hidden md:block">
          <ul className="flex justify-between">
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="home-section"
                smooth={true}
                duration={1200} // duración de la animación en milisegundos
                offset={-5000}
              >
                Home
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="about-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-300}
              >
                About
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="projects-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-150}
              >
                Projects
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="contact-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-0}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="md:block">
                <Switcher isDark={isDark} setIsDark={setIsDark} />
              </div>
            </li>
          </ul>
        </nav>

        <div
          className={`${
            isDark === "dark"
              ? "bg-gradient-to-r from-[var(--fondo)] via-purple-500 to-[var(--fondo)]"
              : "bg-gradient-to-r from-[var(--white)] via-purple-500 to-[var(--white)]"
          } absolute bottom-0 left-0 w-full h-[2px] `}
        ></div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isDark: PropTypes.string.isRequired,
};

export default Header;
