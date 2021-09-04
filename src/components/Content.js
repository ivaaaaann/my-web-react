import "./Content.css";

const Content = ({ img, name, year, complete, explain }) => {
  return (
    <div className="content">
      <div className="content-img">
        {img !== "" ? (
          <img src={img} title={name} alt={name} />
        ) : (
          <img src="" title={name} alt="사진이 없습니다." />
        )}
      </div>
      <div className="content-data">
        <div className="content-data-title font-style">
          {name}({complete})
        </div>
        <div className="content-data-year">{year}</div>
        <div className="content-data-explain">{explain}</div>
      </div>
    </div>
  );
}

export default Content;
