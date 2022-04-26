import React, { Component } from "react";

import Header from "../../../common/header/en";
import Navi from "../../navi/en";
import Footer from "../../../common/footer/en";

import Img from "../../../../img/intro_history_en.png";

class History extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1304">
          <div className="introTitle">
            <div className="introNm">History</div>
            <div className="underline35"></div>
          </div>
          <div className="introCnt">
            <img
              className="historyImg"
              src={Img}
              width="864"
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
