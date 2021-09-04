import "./Hero.css";
import Logo from "../../asset/img/Logo.svg"
import { useEffect, useRef } from "react";


const Hero = () =>{

  const heroId = useRef();

  useEffect(()=>{
    if(window.scrollY === 0){
    }
  }, [])
  return (
      <div className="hero-container">
        <div className="hero-text-wrap" ref={heroId}>
          <img id="hero-img"src={Logo}/>
          <div className="hero-main-text font-style">
            Welcome My Page
          </div>
          <div className="hero-sub-text font-style">
            여러 프로젝트를 기록했습니다
          </div>
        </div>
      </div>
  );
}

export default Hero;
