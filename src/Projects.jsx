import { Link } from "react-scroll";

function projects() {
  return (
    <>
      <div className="flex flex-col gap-8 px-7">
        <h1 className="text-3xl font-semibold text-center mt-[2rem] hover:cursor-pointer">
          <Link
            to="projects-section"
            smooth={true}
            duration={500} // duración de la animación en milisegundos
            offset={-120}
          >
            Projects
          </Link>
        </h1>
        <p className="text-center">21 Blackjack Game</p>
      </div>
    </>
  );
}

export default projects;
