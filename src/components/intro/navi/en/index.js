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
              <span className="mainWord11">
                About
                <br />
                Company
              </span>
            </p>
          </div>
        </div>
        <div className="introNavBox">
          <Link className="introNav introNav3 atag" to="/intro/greet/en">
            <div className="introNav introNav3">Greetings</div>
          </Link>
          <Link className="introNav introNav3 atag" to="/intro/history/en">
            <div className="introNav introNav3">History</div>
          </Link>
          <Link className="introNav introNav3 atag" to="/intro/organization/en">
            <div className="introNav introNav3">Organization</div>
          </Link>
          <Link className="introNav introNav3 atag" to="/intro/license/en">
            <div className="introNav introNav3">Licenses</div>
          </Link>
          <Link className="introNav introNav3 atag" to="/intro/direction/en">
            <div className="introNav introNav3">Directions</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navi;
