import "./Footer.css";
import insta from "../asset/img/LinkInstaImg.svg";
import fb from "../asset/img/LinkFacebookImg2.svg";

const Footer = () => {
  const linkToSNS = (event) => {
    console.log(event);
    const {
      target: { name },
    } = event;
    console.log(name);
    if (name === "insta") {
      window.open("https://www.instagram.com/do0ng_hyun/", "_blank");
    } else if (name === "facebook") {
      window.open(
        "https://www.facebook.com/profile.php?id=100014551603753",
        "_blank"
      );
    }
  };

  return (
    <section id="footer">
      <div className="footer-container">
        <div id="footer-footerWrap">
          <div id="footer-link-buttonWrap">
            <button className="footer-linkBtn" onClick={linkToSNS}>
              <img
                name="insta"
                className="footer-linkImg"
                src={insta}
                title="Instagram"
              />
            </button>
            <button className="footer-linkBtn" onClick={linkToSNS}>
              <img
                name="facebook"
                className="footer-linkImg"
                src={fb}
                title="Facebook"
              />
            </button>
            <button className="footer-linkBtn"></button>
          </div>
          <div className="footer-title">
            © 2021 DH WEB from Donghyun. Personal Production Site
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
