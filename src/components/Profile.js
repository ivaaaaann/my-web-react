import "./Profile.css";
import ProfileImg from "../img/profile.jpg";
import PythonImg from "../img/Python.png";
import ReactImg from "../img/React.png";
import JavascriptImg from "../img/Javascript.png";
import JqueryImg from "../img/Jquery.png";
import HtmlCssImg from "../img/Html&css.png";
import CImg from "../img/C.png";

function MyLangContents({ Lang, img }) {
  return (
    <div className="profile-data-content">
      <div className="profile-data-content-img">
        <img src={img} title={Lang} alt={Lang} />
      </div>
      <div className="profile-data-title">{Lang}</div>
    </div>
  );
}

const MyLanguage = [
  {
    id: 1,
    Lang: "Python",
    img: PythonImg,
  },
  {
    id: 2,
    Lang: "C",
    img: CImg,
  },
  {
    id: 3,
    Lang: "Java Script",
    img: JavascriptImg,
  },
  {
    id: 4,
    Lang: "Html&CSS",
    img: HtmlCssImg,
  },
  {
    id: 5,
    Lang: "Jquery",
    img: JqueryImg,
  },
  {
    id: 6,
    Lang: "React",
    img: ReactImg,
  },
];

function Profile() {
  return (
    <section id="profile">
      <div className="profile-container">
        <div className="profile-data-container">
          <div className="profile-title font-style">내정보</div>
          <div className="profile-privacy-data-wrap">
            <div className="profile-privacy-img">
              <img src={ProfileImg} title="프로필" alt="프로필" />
            </div>
            <div className="profile-privact-data font-style">
              <h5>이름 : 임동현</h5>
              <h5>나이 : 17</h5>
              <h5>소속 : 대구소프트웨어마이스터고등학교 1학년 재학중</h5>
              <h5>성격 : 포기하지 않고 섬세한 성격</h5>
            </div>
          </div>
        </div>
        <div className="profile-data-container">
          <div className="profile-title font-style">스택</div>
          <div className="profile-data-data">
            {MyLanguage.map((data) => (
              <MyLangContents key={data.id} Lang={data.Lang} img={data.img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
