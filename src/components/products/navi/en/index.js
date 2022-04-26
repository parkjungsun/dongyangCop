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
              <span className="mainWord11">Products</span>
            </p>
          </div>
        </div>
        <div className="introNavBox">
          <Link
            className="introNav introNav3 atag"
            to="/products/honingPipe/en"
          >
            <div className="introNav introNav3">Honing Pipe</div>
          </Link>
          <Link
            className="introNav introNav3 atag"
            to="/products/platingRod/en"
          >
            <div className="introNav introNav3">Plating Rod</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navi;
