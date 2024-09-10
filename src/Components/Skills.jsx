import imgHtml from "../assets/skillsImage/html.png";
import imgCss from "../assets/skillsImage/css.png";
import imgJs from "../assets/skillsImage/js.png";
import imgPhp from "../assets/skillsImage/php.png";
import imgReact from "../assets/skillsImage/react.png";
import imgTailwind from "../assets/skillsImage/tailwind.png";
import imgMysql from "../assets/skillsImage/mysql.png";
import imgMongodb from "../assets/skillsImage/mongodb.png";

function Skills() {
  const skillClass = "rounded-[18px] p-1 w-[60px] h-[60px]";

  return (
    <>
      <div className="w-auto px-7 grid gap-8 grid-cols-4">
        <div className={`${skillClass} bg-[#E65000]`}>
          <img src={`${imgHtml}`} alt="html logo" />
        </div>
        <div className={`${skillClass} bg-[#0477BD]`}>
          <img src={`${imgCss}`} alt="css logo" />
        </div>
        <div className={`${skillClass} bg-[#FED503]`}>
          <img src={`${imgJs}`} alt="javascript logo" />
        </div>
        <div className={`${skillClass} bg-[var(--white)]`}>
          <img src={`${imgPhp}`} alt="php logo" />
        </div>
        <div className={`${skillClass} bg-[var(--violetDark)]`}>
          <img src={`${imgReact}`} alt="react logo" />
        </div>
        <div className={`${skillClass} bg-[var(--violetDark)]`}>
          <img src={`${imgTailwind}`} alt="tailwind logo" />
        </div>
        <div className={`${skillClass} bg-[var(--white)]`}>
          <img src={`${imgMysql}`} alt="mysqlo logo" />
        </div>
        <div className={`${skillClass} bg-[var(--white)]`}>
          <img src={`${imgMongodb}`} alt="mongodb logo" />
        </div>
      </div>
    </>
  );
}

export default Skills;
