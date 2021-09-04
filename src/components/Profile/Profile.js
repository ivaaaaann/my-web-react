import "./Profile.css";
import ProfileImg from "../../asset/img/profile.jpg";
import PythonImg from "../../asset/img/Python.png";
import ReactImg from "../../asset/img/React.png";
import JavascriptImg from "../../asset/img/Javascript.png";
import JqueryImg from "../../asset/img/Jquery.png";
import HtmlCssImg from "../../asset/img/Html&css.png";
import CImg from "../../asset/img/C.png";
import ReduxImg from "../../asset/img/Redux.png";
import MyLangContents from "./MyLangContent";
import { useEffect, useRef, useState } from "react";

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
  {
    id: 7,
    Lang: "Redux",
    img: ReduxImg,
  },
];

const Profile = () => {
  const [isPlace, setIsPlace] = useState(false);

  const profileId = useRef();

  const hanldeIsPlace = () => {
    //console.log(`change: ${window.scrollY}`);
    if (window.scrollY >= parseInt(969)) {
      setIsPlace(true);
    } else {
      setIsPlace(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hanldeIsPlace);
    return () => {
      window.removeEventListener("scroll", hanldeIsPlace);
    };
  }, []);

  return (
    <div className="profile-container" ref={profileId}>
      {/* {isPlace ? ( */}
      <div id="profile-dataWrap" className={isPlace ? "ProfileOn" : ""}>
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
      {/* ) : null} */}
    </div>
  );
};

export default Profile;
