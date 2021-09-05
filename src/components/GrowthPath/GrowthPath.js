import "./GrowthPath.css";
import GrowthPathItem from "./GrowthPathItem";

const GrowthPathData = [
  {
    id: 1,
    img: "https://image.flaticon.com/icons/png/128/1125/1125008.png",
    explain:
      "리액트의 훅, 여러 라이브러리를 공부하고 연습하여 리액트를 마스터 합니다.",
  },
  {
    id: 2,
    img: "https://image.flaticon.com/icons/png/512/3160/3160887.png",
    explain:
      "NestJS, NodeJS, Typescript를 공부하여 기본적인 서버를 공부합니다.",
  },
  {
    id: 3,
    img: "https://image.flaticon.com/icons/png/128/781/781683.png",
    explain: "디자인을 공부합니다.",
  },
  {
    id: 4,
    img: "https://image.flaticon.com/icons/png/128/3014/3014264.png",
    explain: "알고리즘 공부 및 코딩테스트 준비를 합니다.",
  },
];

const GrowthPath = () => {
  return (
    <div className="growthpath-container">
      <div className="growthpath-title font-style">로드맵</div>
      <div className="growthpath-item-wrap">
        {GrowthPathData.map((data) => (
          <GrowthPathItem img={data.img} explain={data.explain} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default GrowthPath;
