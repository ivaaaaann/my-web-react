import { useState } from "react";
import "./GrowthPathItem.css";

const GrowthPathItem = ({ img, explain }) => {
  const [isClick, setIsClick] = useState(false);

  const onClickToggle = () => setIsClick((prev) => !prev);

  return (
    <div className="growthpath-item-container">
      <div className={`growthpath-item ${isClick ? "isOn" : ""}`}>
        <img src={img} title="로드맵" alt="로드맵" />
      </div>
      <div className="growthpath-item-explain">
        <div className="growthpath-item-explain-textWrap">
          <p className="growthpath-item-explain-text">{explain}</p>
        </div>
      </div>
      <button className="growthpath-btn" onClick={onClickToggle} />
    </div>
  );
};

export default GrowthPathItem;
