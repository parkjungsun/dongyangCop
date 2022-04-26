import React, { Component } from "react";

import Header from "../../common/header";
import Navi from "../navi";
import Footer from "../../common/footer";

import Img from "../../../img/intro_history.png";

class History extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1304">
          <div className="introTitle">
            <div className="introNm">연혁</div>
            <div className="underline35"></div>
          </div>
          <div className="introCnt">
            <img
              className="historyImg"
              src={Img}
              width="740"
              height="777"
              alt="intro"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default History;
