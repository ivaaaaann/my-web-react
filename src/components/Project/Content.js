import { useEffect, useState } from "react";
import "./Content.css";
import DetailContent from "./DetailContent";

const Content = ({
  img,
  name,
  year,
  complete,
  summary,
  bigImg,
  stack,
  explain,
  gitLink,
}) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
      return () => {
        const scrollY = document.body.style.top;
        document.body.style.cssText = "";
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      };
    }
  }, [isModal]);

  const modalToggle = (event) => {
    event.preventDefault();
    setIsModal((prev) => !prev);
  };
  return (
    <>
      <div className="content">
        <div className="content-img">
          {img !== "" ? (
            <img src={img} title={name} alt={name} />
          ) : (
            <img src="" title={name} alt="사진이 없습니다." />
          )}
        </div>
        <div className="content-data">
          <div className="content-data-title font-style">
            {name}({complete})
          </div>
          <div className="content-data-year">{year}</div>
          <div className="content-data-explain">{summary}</div>
        </div>
        <button className="content-detailContent-btn" onClick={modalToggle} />
      </div>
      <DetailContent
        isModal={isModal}
        modalToggle={modalToggle}
        name={name}
        year={year}
        isComplete={complete}
        img={img}
        bigImg={bigImg}
        stack={stack}
        explain={explain}
        gitLink={gitLink}
      />
    </>
  );
};

export default Content;
