import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navi extends Component {
  render() {
    return (
      <div>
        <div className="productImg">
          <div className="blank90"></div>
          <div className="mainWord">
            <p className="mainWord1">
              <span className="mainWord11">제품소개</span>
            </p>
          </div>
        </div>
        <div className="introNavBox">
          <Link className="introNav introNav2 atag" to="/products/honingPipe/">
            <div className="introNav introNav2">호닝파이프</div>
          </Link>
          <Link className="introNav introNav1 atag" to="/products/platingRod/">
            <div className="introNav introNav1">도금봉</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navi;
