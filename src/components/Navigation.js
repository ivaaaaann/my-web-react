import React, { Component } from "react";
import "./Navigation.css";
import NavMenuImg from "../img/NavMenu.svg";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
      isScroll: false,
      isMenu: false,
    };
  }
  onClickMenu = () => this.setState({ isMenu: !this.state.isMenu });
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });

    if (scrollTop >= 432 && scrollTop < 1054) {
      this.isScroll = true;
      return;
    }
    this.isScroll = false;
  };
  render() {
    return (
      <section id="navigation">
        <div
          className={
            this.isScroll
              ? "navigation-container nav-after"
              : "navigation-container"
          }
          onScroll={this.handleScroll}
        >
          <div className="nav-logo-img">
            <img
              src="https://image.flaticon.com/icons/png/128/639/639394.png"
              alt="logo"
              title="logo"
            />
          </div>
          <div className="nav-item-container">
            <div className="nav-item font-style">프로젝트</div>
            <div className="nav-item font-style">소개</div>
          </div>
          <div className="nav-menu-wrapper">
            <img
              src={NavMenuImg}
              alt="nav-menu"
              title="nav-menu"
              className="nav-after-menu"
              onClick={this.onClickMenu}
            />
          </div>
        </div>
        {this.state.isMenu ? (
          <div className="nav-list-ItemWrap">
            <div className="nav-list-ItemWrap-Item font-style">프로젝트</div>
            <div className="nav-list-ItemWrap-Item font-style">소개</div>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Navigation;
