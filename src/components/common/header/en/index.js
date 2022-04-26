import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../../img/main_logo.png";

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
            <Link className="mainLogo atag" to="/main/en">
              <img src={logo} alt="logo" width="39" height="37"></img>
              <div>DONGYANG</div>
            </Link>
          </div>
          <div className="mainTab">
            <div className="tabList">
              <div className="Tab" onClick={this.cursorInit}>
                <Link className="Tab atag" to="/intro/greet/en">
                  About Company
                </Link>
              </div>
              <div className="blank"></div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/greet/en">
                  Greetings
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/history/en">
                  History
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/organization/en">
                  Organization
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/license/en">
                  Licenses
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/intro/direction/en">
                  Directions
                </Link>
              </div>
            </div>
            <div className="tabList">
              <div className="Tab" onClick={this.cursorInit}>
                <Link className="Tab atag" to="/products/honingPipe/en">
                  Products
                </Link>
              </div>
              <div className="blank"></div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/products/honingPipe/en">
                  Honing Pipe
                </Link>
              </div>
              <div className="tlist" onClick={this.cursorInit}>
                <Link className="tlist atag" to="/products/platingRod/en">
                  Plating Rod
                </Link>
              </div>
            </div>
            <div className="tabList">
              <div className="Tab" onClick={this.cursorInit}>
                <Link className="Tab atag" to="/gallary/en">
                  Gallery
                </Link>
              </div>
              <div className="blank"></div>
            </div>
            <div className="tabList">
              <div className="Tab" onClick={this.cursorInit}>
                <Link className="Tab atag" to="/QnA/en">
                  Online Q&A
                </Link>
              </div>
              <div className="blank"></div>
            </div>
          </div>
          <div className="langTab" onClick={this.cursorInit}>
            <Link className="langTab atag" to="/main">
              KOR
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
