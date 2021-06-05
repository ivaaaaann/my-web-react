import "./Content.css";

function Content({ img, name, year, complete, explain }) {
  return (
    <div className="content">
      <div className="content-img">
        <img src={img} title={name} alt={name} />
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
