import "./LinkGithub.css";

const LinkGithub = () => {
  return (
    <div id="linkGithub-container">
      <div id="linkGithub-backImg" />
      <div id="linkGithub-opacity" />
      <div id="linkGithub-textWrap">
        <p id="linkGithub-mainText">Github</p>
        <p id="linkGithub-subText" className="font-style">
          깃허브 많이 방문해주시면 감사하겠습니다.
        </p>
      </div>
      <button
        id="linkGithub-btn"
        className="font-style"
        onClick={() => window.open("https://github.com/ldh3907", "_blank")}
      >
        Go To Github
      </button>
    </div>
  );
};

export default LinkGithub;
