import "./ContentContainer.css";
import Content from "./Content";

const MyProjectList = [
  {
    id: 1,
    name: "현이홈페이지 제작",
    year: "2020",
    complete: "완료",
    explain: "구글의 Teachable Machine 툴을 이용하여 만든 AI 웹서비스 입니다.",
    img: "/static/media/hyunie-homepage.08f1fc33.png",
  },
  {
    id: 2,
    name: "PTPO 프로젝트",
    year: "2021",
    complete: "진행중",
    explain: "단디 프로젝트에서 기획된 포트폴리오 관리 웹서비스 입니다.",
    img: "/static/media/PTPO_project.8efccff5.png",
  },
  {
    id: 3,
    name: "MOVIE APP",
    year: "2021",
    complete: "완료",
    explain:
      "노마드 코더의 ReactJS로 영화 웹 서비스 만들기를 보고 만든 영화 웹서비스 입니다.",
    img: "/static/media/Movie_app.682e7ce8.png",
  },
  {
    id: 4,
    name: "ToDoList",
    year: "2021",
    complete: "미완료",
    explain:
      "노마드 코더의 바닐라 JS로 크롬 앱 만들기를 보고 만든 TodoList 웹서비스 입니다.",
    img: "/static/media/Todolist.ffbb42e1.png",
  },
];

function ContentContainer() {
  return (
    <section id="contents">
      <div className="content-title-container">
        <div className="content-title font-style">프로젝트</div>
      </div>
      <div className="content-container">
        {MyProjectList.map((data) => (
          <Content
            key={data.id}
            name={data.name}
            year={data.year}
            complete={data.complete}
            explain={data.explain}
            img={data.img}
          />
        ))}
        {/* <Content
          name="현이홈페이지 제작"
          year="2020"
          complete="완료"
          explain="구글의 Teachable Machine 툴을 이용하여 만든 AI 웹서비스 입니다."
          img={HyunieHompageImg}
        />
        <Content
          name="PTPO 프로젝트"
          year="2021"
          complete="진행중"
          explain="단디 프로젝트에서 기획된 포트폴리오 관리 웹서비스 입니다."
          img={PTPOProjectImg}
        />
        <Content
          name="MOVIE APP"
          year="2021"
          complete="완료"
          explain="노마드 코더의 ReactJS로 영화 웹 서비스 만들기를 보고 만든 영화 웹서비스 입니다."
          img={MovieAppImg}
        />
        <Content
          name="toDoList"
          year="2021"
          complete="미완료"
          explain="노마드 코더의 바닐라 JS로 크롬 앱 만들기를 보고 만든 TodoList 웹서비스 입니다."
          img={ToDOListImg} 
        />*/}
      </div>
    </section>
  );
}

export default ContentContainer;
