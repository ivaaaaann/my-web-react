import React, { useEffect, useState } from "react";
import "./Navigation.css";
import NavMenuImg from "../asset/img/NavMenu.svg";

const Navigation = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="navigation">
      <div className={`navigation-container ${isScroll ? "navOn" : ""}`}>
        <div className="nav-logo-img">
          <img
            src="https://image.flaticon.com/icons/png/128/639/639394.png"
            alt="logo"
            title="logo"
          />
        </div>
        <div className="nav-item-container">
          <div className="nav-item font-style">프로젝트</div>
          <div className="nav-item font-style">소개</div>
        </div>
        <div className="nav-menu-wrapper">
          <img
            src={NavMenuImg}
            alt="nav-menu"
            title="nav-menu"
            className="nav-after-menu"
          />
        </div>
      </div>
    </section>
  );
};

export default Navigation;
