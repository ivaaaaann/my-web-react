import { useState } from "react";
import "./GrowthPathItem.css";

const GrowthPathItem = ({ img, explain, index, isScroll }) => {
  const [isClick, setIsClick] = useState(false);

  const onClickToggle = () => setIsClick((prev) => !prev);

  return (
    <div
      className={`growthpath-item-container ${
        isScroll ? `isScroll${index}` : ""
      }`}
    >
      <div className={`growthpath-item ${isClick ? "isClick" : ""}`}>
        <img src={img} title="로드맵" alt="로드맵" />
      </div>
      <div className="growthpath-item-explain">
        <div className="growthpath-item-explain-textWrap">
          <p className="growthpath-item-explain-text">{explain}</p>
        </div>
      </div>
      <button className="growthpath-btn" onClick={onClickToggle} />
      <div className="growthpath-number-box">
        <p className="growthpath-number font-style">{index}</p>
      </div>
    </div>
  );
};

export default GrowthPathItem;
