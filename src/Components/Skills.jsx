function Skills() {
  const skillClass = "rounded-[18px] p-1 w-[60px] h-[60px]";

  return (
    <>
      <div className="w-auto px-7 grid gap-8 grid-cols-4">
        <div className={`${skillClass} bg-[#E65000]`}>
          <img src="/src/assets/skillsImage/html.png" alt="html logo" />
        </div>
        <div className={`${skillClass} bg-[#0477BD]`}>
          <img src="/src/assets/skillsImage/css.png" alt="css logo" />
        </div>
        <div className={`${skillClass} bg-[#FED503]`}>
          <img src="/src/assets/skillsImage/js.png" alt="javascript logo" />
        </div>
        <div className={`${skillClass} bg-[var(--white)]`}>
          <img src="/src/assets/skillsImage/php.png" alt="php logo" />
        </div>
        <div className={`${skillClass} bg-[var(--violetDark)]`}>
          <img src="/src/assets/skillsImage/react.png" alt="react logo" />
        </div>
        <div className={`${skillClass} bg-[var(--violetDark)]`}>
          <img src="/src/assets/skillsImage/tailwind.png" alt="tailwind logo" />
        </div>
        <div className={`${skillClass} bg-[var(--white)]`}>
          <img src="/src/assets/skillsImage/mysql.png" alt="mysqlo logo" />
        </div>
        <div className={`${skillClass} bg-[var(--white)]`}>
          <img src="/src/assets/skillsImage/mongodb.png" alt="mongodb logo" />
        </div>
      </div>
    </>
  );
}

export default Skills;
