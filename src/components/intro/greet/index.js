import React, { Component } from "react";

import Header from "../../common/header";
import Navi from "../navi";
import Footer from "../../common/footer";

import Img from "../../../img/intro_greet.png";

class Greet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1304">
          <div className="introTitle">
            <div className="introNm">인사말</div>
            <div className="underline35"></div>
          </div>
          <div className="introCnt">
            항상 저희 제품을 아껴주시고 이용해주시는 고객 여러분께 깊은 감사의
            마음을 전합니다.
            <br />
            <br />
            (주)동양은 2000년 5월 호닝파이프 전문 생산회사로 설립하였습니다.
            현재까지 더 나은 제품 품질과 안정적인 납기대응을 위하여 과감한
            설비투자와 지속적인 작업효율 향상에 힘쓰고 있습니다. 또한 다품종
            다규격의 제품생산을 지향하여 항상 변화하는 고객의 수요에 충실히
            부응하고자 노력하고 있습니다.
            <br />
            <br />
            저희 (주)동양은 앞으로도 항상 최고의 제품 품질과 납기대응을 유지하여
            고객에게 감동을 드리고, 안심 경영을 위해 최선의 노력을 다하겠습니다.
            고객 여러분의 끊임없는 관심과 격려를 부탁드리며, 항상 행복하시고
            건강하시길 기원합니다.
            <br />
            <br />
            감사합니다.
            <br />
            <br />
            (주)동양 대표 <span>박우영</span>
          </div>
          <img
            className="greetImg"
            src={Img}
            width="408"
            height="230"
            alt="intro"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Greet;
