import "./MyLangContent.css";

const MyLangContents = ({ Lang, img }) => {
  return (
    <div className="profile-data-content">
      <div className="profile-data-content-img">
        <img src={img} title={Lang} alt={Lang} />
      </div>
      <div className="profile-data-title">{Lang}</div>
    </div>
  );
};
export default MyLangContents;
