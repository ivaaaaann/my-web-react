import { useState } from "react";
import "./ContentContainer.css";
import Content from "./Content";
import HyunieHompageImg from "../../asset/img/hyunie-homepage.png";
import PTPOProjectImg from "../../asset/img/PTPO_project.png";
import MovieAppImg from "../../asset/img/Movie_app.png";
import ToDoListImg from "../../asset/img/Todolist.png";
import HooksImg from "../../asset/img/10KindHooksImg.png";
import 맛있소고Img from "../../asset/img/맛있소고.png";
import TweeterCloneImg from "../../asset/img/TweeterClone.png";

const tabs = [
  {
    tab: "개인",
    content: [
      {
        id: 1,
        name: "현이홈페이지 제작",
        year: "2020",
        complete: "완료",
        explain:
          "구글의 Teachable Machine 툴을 이용하여 만든 AI 웹서비스 입니다.",
        img: HyunieHompageImg,
      },
      {
        id: 2,
        name: "MOVIE APP",
        year: "2021",
        complete: "완료",
        explain:
          "노마드 코더의 ReactJS로 영화 웹 서비스 만들기를 보고 만든 영화 웹서비스 입니다.",
        img: MovieAppImg,
      },
      {
        id: 3,
        name: "ToDoList",
        year: "2021",
        complete: "미완료",
        explain:
          "노마드 코더의 바닐라 JS로 크롬 앱 만들기를 보고 만든 TodoList 웹서비스 입니다.",
        img: ToDoListImg,
      },
      {
        id: 4,
        name: "10 Kind hooks",
        year: "2021",
        complete: "완료",
        explain:
          "노마드 코더의 실전형 리액트 Hooks 10개를 보고 만든 hook 모음 웹서비스 입니다.",
        img: HooksImg,
      },
      {
        id: 5,
        name: "Tweeter Clone Coding",
        year: "2021",
        complete: "완료",
        explain: "노마드 코더의 트위터 를론 코딩을 보고 만든 웹서비스 입니다.",
        img: TweeterCloneImg,
      },
    ],
  },
  {
    tab: "학교",
    content: [
      {
        id: 1,
        name: "PTPO 프로젝트",
        year: "2021",
        complete: "진행중",
        explain: "단디 프로젝트에서 기획된 포트폴리오 관리 웹서비스 입니다.",
        img: PTPOProjectImg,
      },
      {
        id: 2,
        name: "GLASS 프로젝트",
        year: "2021",
        complete: "진행중",
        explain:
          "바인드 6기 인턴 프로젝트에서 기획된 대소고 오픈소스 웹 서비스 입니다.",
        img: "",
      },
      {
        id: 3,
        name: "맛있소고 프로젝트",
        year: "2021",
        complete: "완료",
        explain:
          "2021학년도 1학기 대소고 해커톤에서 기획된 대소고 맛집 추천 플랫폼입니다.",
        img: 맛있소고Img,
      },
    ],
  },
];

const ContentContainer = () => {
  const useTabs = (tabIndex, tabsContent) => {
    const [currentIndex, setCurrentIndex] = useState(tabIndex);
    return {
      currentItem: tabsContent[currentIndex],
      changeItem: setCurrentIndex,
    };
  };

  const { currentItem, changeItem } = useTabs(0, tabs);

  const [btnState, setBtnState] = useState(0);

  const onClickButton = (index) => {
    changeItem(index);
    setBtnState(index);
    console.log(btnState);
  };

  return (
    <div id="project-container">
      <div className="project-headerWrap">
        <div className="project-title font-style">프로젝트</div>
        <p id="project-subTitle" className="font-style">
          여러 프로젝트를 기록했습니다
        </p>
        <div className="project-button-wrap">
          {tabs.map((section, index) => (
            <button
              className={
                "project-classification-button-" +
                (btnState === index ? "on" : "off")
              }
              onClick={() => onClickButton(index)}
            >
              <div className="project-classification-button-text font-style">
                {section.tab}
              </div>
            </button>
          ))}
        </div>
      </div>
      <hr id="project-middleLine" />
      <div className="project-content-container">
        {currentItem.content.map((content) => {
          return (
            <Content
              key={content.key}
              name={content.name}
              year={content.year}
              complete={content.complete}
              explain={content.explain}
              img={content.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContentContainer;
