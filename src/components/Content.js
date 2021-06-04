import "./Content.css";

function Content({ img, name, year, complete, explain }) {
  return (
    <div className="content">
      <div className="content-img">
        <img src={img} title="프로젝트" alt="프로젝트" />
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
