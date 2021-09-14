import { useState } from "react";
import "./ContentContainer.css";
import Content from "./Content";
import HyunieHompageImg from "../../asset/img/hyunie-homepage.png";
import PTPOProjectImg from "../../asset/img/PTPO_project.png";
import MovieAppImg from "../../asset/img/Movie_app.png";
import ToDoListImg from "../../asset/img/Todolist.png";
import HooksImg from "../../asset/img/10KindHooksImg.png";
import 맛있소고Img from "../../asset/img/맛있소고.png";
import TwitterCloneImg from "../../asset/img/TweeterClone.png";
import GLASSProjectImg from "../../asset/img/GLASSProject.png";
import bigHyunieHompageImg from "../../asset/img/big-hyunieHomepage.png";
import bigPTPOProjectImg from "../../asset/img/big-PTPO.png";
import bigToDoListImg from "../../asset/img/big-toDoList.png";
import bigTweeterCloneImg from "../../asset/img/big-twitterCloneCoding.png";
import bigGLASSProjectImg from "../../asset/img/big-Glass.png";
import bigHooksImg from "../../asset/img/big-10kindHooks.png";

const tabs = [
  {
    tab: "개인",
    content: [
      {
        id: 1,
        name: "현이홈페이지",
        year: "2020",
        complete: "완료",
        summary:
          "구글의 Teachable Machine 툴을 이용하여 만든 AI 웹서비스 입니다.",
        explain: "",
        img: HyunieHompageImg,
        bigImg: bigHyunieHompageImg,
        stack: ["Html", "Css"],
        explain:
          "중3때 조코딩 강의를 보며 만들었던 웹사이트 입니다. 인공지능 컨턴츠는 구글의 teachable machine 이라는 머신러닝 툴을 이용하여 만들었고, 웹사이트는 템플릿을 가져와서 외형만 조금 바꿨습니다.",
        gitLink: "",
      },
      {
        id: 2,
        name: "MOVIE APP",
        year: "2021",
        complete: "완료",
        summary:
          "노마드 코더의 ReactJS로 영화 웹 서비스 만들기를 보고 만든 영화 웹서비스 입니다.",
        img: MovieAppImg,
        bigImg: MovieAppImg,
        stack: ["React", "Css"],
        explain:
          "저의 첫 리액트로 만든 결과물입니다. 노마드 코더의 영화 무비 앱 만들기 강의를 보고 리액트를 배우면서 만들었습니다.",
        gitLink:
          "https://github.com/ldh3907/study-react-nomadcoder-twitter-clone-coding",
      },
      {
        id: 3,
        name: "ToDoList",
        year: "2021",
        complete: "미완료",
        summary:
          "노마드 코더의 바닐라 JS로 크롬 앱 만들기를 보고 만든 TodoList 웹서비스 입니다.",
        img: ToDoListImg,
        bigImg: bigToDoListImg,
        stack: ["Html", "Css", "JS"],
        explain:
          "리액트를 배울려면 JS를 할 줄 알아야 하는데 별로 잘하지 못해서 만들었던 결과물입니다. 노마드코더의 크롬 앱 만들기 강의를 보고 만들었습니다.",
        gitLink: "https://github.com/ldh3907/study-js-nomadcorder-chrome-app-",
      },
      {
        id: 4,
        name: "10 Kind hooks",
        year: "2021",
        complete: "완료",
        summary:
          "노마드 코더의 실전형 리액트 Hooks 10개를 보고 만든 hook 모음 웹서비스 입니다.",
        img: HooksImg,
        bigImg: bigHooksImg,
        stack: ["React", "Css"],
        explain:
          "리액트를 배우고 빠질 수 없는 hook을 배우기 위해 만들었습니다. 노마드코더의 10가지 리액트 훅 강의를 보고 만들었습니다.",
        gitLink:
          "https://github.com/ldh3907/study-react-nomadcoder-10-kinds-hooks",
      },
      {
        id: 5,
        name: "Tweeter Clone Coding",
        year: "2021",
        complete: "완료",
        summary: "노마드 코더의 트위터 를론 코딩을 보고 만든 웹서비스 입니다.",
        img: TwitterCloneImg,
        bigImg: bigTweeterCloneImg,
        stack: ["React", "Css", "Firebase"],
        explain:
          "리액트를 배우고 좀 심화단계를 배우기 위해 만들었습니다. 노마드코더의 트위터 클론 코딩 강의를 보고 만들었습니다.",
        gitLink:
          "https://github.com/ldh3907/study-react-nomadcoder-twitter-clone-coding",
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
        complete: "미완료",
        summary: "단디 프로젝트에서 기획된 포트폴리오 관리 웹서비스 입니다.",
        img: PTPOProjectImg,
        bigImg: bigPTPOProjectImg,
        stack: ["Html", "Css", "JS"],
        explain:
          "바인드 DANDI 아카데미에서 진행했던 프로젝트입니다. 개인 포트폴리오를 관리하고, 기록하고, 공유하는 사이트이며, 저는 프론트를 맡았습니다.",
        gitLink: "https://github.com/ldh3907/Dandi-PTPO-React",
      },
      {
        id: 2,
        name: "GLASS 프로젝트",
        year: "2021",
        complete: "진행중",
        summary:
          "바인드 6기 인턴 프로젝트에서 기획된 대소고 오픈소스 웹 서비스 입니다.",
        img: GLASSProjectImg,
        bigImg: bigGLASSProjectImg,
        stack: ["React", "Css", "Scss", "Recoil"],
        explain:
          "바인트 인턴 프로젝트로 진행했던 프로젝트입니다. 대소고(대구소프트웨어마이스터고등학교) 학생들의 소셜 네트워크 서비스 이며 저는 프론트를 맡았습니다. 부모님들이 함께 본다는 특징이 있습니다.",
        gitLink: "https://github.com/B1ND-6th-intern/GLASS_WEB",
      },
      {
        id: 3,
        name: "맛있소고 프로젝트",
        year: "2021",
        complete: "완료",
        summary:
          "2021학년도 1학기 대소고 해커톤에서 기획된 대소고 맛집 추천 플랫폼입니다.",
        img: 맛있소고Img,
        bigImg: 맛있소고Img,
        stack: ["React", "Scss"],
        explain:
          "대구소프트웨어고등학교 2021년 1학기 해커톤 프로젝트로 진행했던 프로젝트입니다. 학교 근처 맛집을 공유하고 리뷰하는 서비스입니다. 선배님들과 같이 하면서 많을것을 배웠습니다. 저는 웹퍼블리싱을 했습니다.",
        gitLink: "",
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
              summary={content.summary}
              img={content.img}
              bigImg={content.bigImg}
              stack={content.stack}
              explain={content.explain}
              gitLink={content.gitLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContentContainer;
