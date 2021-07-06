import { useState } from "react";
import "./ContentContainer.css";
import Content from "./Content";
import HyunieHompageImg from "../img/hyunie-homepage.png";
import PTPOProjectImg from "../img/PTPO_project.png";
import MovieAppImg from "../img/Movie_app.png";
import ToDoListImg from "../img/Todolist.png";

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

  return (
    <section id="contents">
      <div className="content-title-container">
        <div className="content-title font-style">프로젝트</div>
      </div>
      <div className="content-button-wrap">
        {tabs.map((section, index) => (
          <button
            className="content-classification-button"
            onClick={() => changeItem(index)}
          >
            <div className="content-classification-button-text font-style">
              {section.tab}
            </div>
          </button>
        ))}
      </div>
      <div className="content-container">
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
    </section>
  );
};

export default ContentContainer;
