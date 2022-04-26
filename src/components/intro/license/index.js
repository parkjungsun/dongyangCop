import React, { Component } from "react";

import Header from "../../common/header";
import Navi from "../navi";
import Footer from "../../common/footer";

import Img from "../../../img/license1.png";
import Img2 from "../../../img/license2.png";

class License extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1105">
          <div className="introTitle">
            <div className="introNm">라이센스</div>
            <div className="underline35"></div>
          </div>
          <div className="introCnt2">
            <img src={Img} width="406" height="550" alt="intro" />
            <img src={Img2} width="406" height="550" alt="intro" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default License;
