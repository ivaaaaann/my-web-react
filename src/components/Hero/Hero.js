import "./Hero.css";
import Logo from "../../asset/img/Logo.svg";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroId = useRef();
  const [isTop, setIsTop] = useState(true);

  const handleHero = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else if (window.scrollY !== 0) {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHero);
    return () => {
      window.removeEventListener("scroll", handleHero);
    };
  }, []);

  return (
    <div className="hero-container">
      {isTop ? (
        <div className="hero-text-wrap" ref={heroId}>
          <img id="hero-img" src={Logo} />
          <div className="hero-main-text font-style">Welcome My Page</div>
          <div className="hero-sub-text font-style">
            깊게 알려고 노력하는 개발자
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
