import HamburgerMenu from "./HamburguerMenu";
import { Link } from "react-scroll";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[var(--fondo)] shadow-md z-50">
      <div className="relative w-auto h-[10vh] flex justify-between px-7 items-center">
        <h1 className="font-bold md:text-3xl text-2xl hover:cursor-pointer">
          <Link
            to="home-section"
            smooth={true}
            duration={500} // duración de la animación en milisegundos
            offset={-150}
          >
            DaniDev
          </Link>
        </h1>

        <div>
          {/* Componente del menú hamburguesa */}
          <HamburgerMenu />
        </div>

        <nav className="lg:w-[500px] md:w-96 text-xl hidden md:block">
          <ul className="flex justify-between">
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="home-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-150}
              >
                Home
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="about-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-100}
              >
                About
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="projects-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li className=" hover:text-[var(--violet)] cursor-pointer">
              <Link
                to="contact-section"
                smooth={true}
                duration={500} // duración de la animación en milisegundos
                offset={-120}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black via-purple-500 to-black"></div>
      </div>
    </header>
  );
}

export default Header;
