import React, { Component } from "react";

import Header from "../../../common/header/en";
import Navi from "../../navi/en";
import Footer from "../../../common/footer/en";

import Img from "../../../../img/intro_organization_en.png";

class Organization extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1105">
          <div className="introTitle">
            <div className="introNm">Organization</div>
            <div className="underline35"></div>
          </div>
          <div className="introCnt2">
            <img src={Img} width="1194" height="557" alt="intro" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Organization;
