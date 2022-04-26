import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../img/main_logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.cursorInit = this.cursorInit.bind(this);
  }
  cursorInit() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="nav">
        <div className="mainNav">
          <div className="mainLogo" onClick={this.cursorInit}>
            <Link className="mainLogo atag" to="/main">
              <img src={logo} alt="logo" width="39" height="37"></img>
              <div>(주) 동양</div>
            </Link>
          </div>
          <div className="mainTab">
            <div className="tabList">
              <div className="Tab" onClick={this.cursorInit}>
                <Link className="Tab atag" to="/intro/greet/">
                  회사소개
                </Link>
              </div>
              <div className="blank"></div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/greet/">
                  인사말
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/history/">
                  연혁
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/organization/">
                  조직도
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/license/">
                  라이센스
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/direction/">
                  찾아오시는 길
                </Link>
              </div>
            </div>
            <div className="tabList" onClick={this.cursorInit}>
              <div className="Tab">
                <Link className="Tab atag" to="/products/honingPipe/">
                  제품소개
                </Link>
              </div>
              <div className="blank"></div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/products/honingPipe/">
                  호닝파이프
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/products/platingRod/">
                  도금봉
                </Link>
              </div>
            </div>
            <div className="tabList">
              <div className="Tab" onClick={this.cursorInit}>
                <Link className="Tab atag" to="/gallary/">
                  작업사진
                </Link>
              </div>
              <div className="blank"></div>
            </div>
            <div className="tabList">
              <div className="Tab" onClick={this.cursorInit}>
                <Link className="Tab atag" to="/QnA/">
                  온라인문의
                </Link>
              </div>
              <div className="blank"></div>
            </div>
          </div>
          <div className="langTab" onClick={this.cursorInit}>
            <Link className="langTab atag" to="/main/en">
              ENG
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
