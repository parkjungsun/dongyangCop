import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navi extends Component {
  render() {
    return (
      <div>
        <div className="introImg">
          <div className="blank90"></div>
          <div className="mainWord">
            <p className="mainWord1">
              <span className="mainWord11">회사소개</span>
            </p>
          </div>
        </div>
        <div className="introNavBox">
          <Link className="introNav introNav1 atag" to="/intro/greet/">
            <div className="introNav introNav1">인사말</div>
          </Link>
          <Link className="introNav introNav1 atag" to="/intro/history/">
            <div className="introNav introNav1">연혁</div>
          </Link>
          <Link className="introNav introNav1 atag" to="/intro/organization/">
            <div className="introNav introNav1">조직도</div>
          </Link>
          <Link className="introNav introNav2 atag" to="/intro/license/">
            <div className="introNav introNav2">라이센스</div>
          </Link>
          <Link className="introNav introNav3 atag" to="/intro/direction/">
            <div className="introNav introNav3">찾아오시는 길</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navi;
