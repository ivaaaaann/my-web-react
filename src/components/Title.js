import "./Title.css";
import BackgroundImg from "../img/Title-background.png";

function Title() {
  return (
    <section id="Title">
      <div className="title-container">
        <img
          src={BackgroundImg}
          title="Background"
          alt="Background"
          className="background-img"
        />
        <div className="title-text-wrap">
          <div className="title-main-text font-style">
            페이지에 오신걸 환영합니다
          </div>
          <div className="title-sub-text font-style">
            여러 프로젝트를 기록했습니다.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Title;
