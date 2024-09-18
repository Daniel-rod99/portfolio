import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-scroll";

function Arrow() {
  return (
    <div className="w-32">
      <Link
        to="about-section"
        smooth={true}
        duration={500} // duración de la animación en milisegundos
        offset={-300} // ajusta la posición final del scroll (opcional)
      >
        <Player
          src="https://lottie.host/e830d4bc-d7a2-4f61-8170-65060dd79b97/UQV5PpgPf2.json"
          className="player"
          loop
          autoplay
        />
      </Link>
    </div>
  );
}

export default Arrow;
