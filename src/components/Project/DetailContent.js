import "./DetailContent.css";
import Github from "../../asset/img/Github.svg";
import DetailContentExit from "../../asset/img/DetailContentExit.svg";

const DetailContent = ({
  isModal,
  modalToggle,
  name,
  year,
  isComplete,
  bigImg,
  stack,
  explain,
  gitLink,
}) => {
  const LinkToGithub = () => {
    if (gitLink === "") {
      window.alert("이 프로젝트는 레포지토리가 없습니다.");
      return;
    }
    window.open(gitLink, "_blank");
  };

  return (
    <>
      {isModal && (
        <div className="detailCotent-background">
          <div className="detailContent-container">
            <div className="detailContent-leftWrap">
              <img className="detailContent-img" src={bigImg} />
            </div>
            <div className="detailContent-rightWrap">
              <div className="detailContent-name">
                {name}({isComplete})
              </div>
              <p className="datailContent-year">{year}</p>
              <div className="detailContent-stackWrap">
                {stack.map((data) => (
                  <div className="detailContent-stack">
                    <p className="detailContent-stack-text">{data}</p>
                  </div>
                ))}
              </div>
              <p className="detailContent-explain">{explain}</p>
              <button
                className="detailContent-linkGithub-btn"
                onClick={LinkToGithub}
              >
                <img
                  className="datailContent-linkGithub-btn-img"
                  src={Github}
                />
              </button>
            </div>
          </div>
          <button className="detailContent-closeBtn" onClick={modalToggle}>
            <img
              className="detailContent-closeBtn-img"
              src={DetailContentExit}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default DetailContent;
