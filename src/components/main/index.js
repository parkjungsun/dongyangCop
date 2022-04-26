import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../common/header";
import Footer from "../common/footer";

import locationImg from "../../img/location.png";
import phoneImg from "../../img/phone.png";
import cop from "../../img/CopOverView.png";
import product from "../../img/ProductOverView.png";
import arrow from "../../img/db_arrow.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.cursorInit = this.cursorInit.bind(this);
  }
  cursorInit() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="mainImg">
          <div className="mainWord">
            <p className="mainWord1">
              <span className="mainWord11">DONGYANG </span>
              <span className="mainWord12"> CO.,LTD.</span>
            </p>
            <p className="mainWord2">
              호닝파이프 및 도금봉 규격품 전문 생산업체
            </p>
          </div>
        </div>
        <div className="mainOverview">
          <div className="owBox">
            <div>
              <img src={cop} alt="logo" width="510" height="287"></img>
            </div>
            <div>
              <div className="ow_title">회사소개</div>
              <div className="ow_cnt">
                (주)동양은 2000년 5월 호닝파이프 전문 생산회사로 설립하였습니다.
                <br />
                현재까지 더 나은 제품 품질과 안정적인 납기대응을 위하여 과감한
                설비투자와 <br />
                지속적인 작업효율 향상에 힘쓰고 있습니다. 또한 다품종 다규격의
                제품생산을
                <br /> 지향하여 항상 변화하는 고객의 수요에 충실히 부응하고자
                노력하고 있습니다.
              </div>
            </div>
            <div className="goDetail" onClick={this.cursorInit}>
              <Link className="goDetail atag" to="/intro/greet/">
                자세히보기
                <img src={arrow} alt="logo" width="13" height="13"></img>
              </Link>
            </div>
          </div>
          <div className="owBox">
            <div>
              <img src={product} alt="logo" width="510" height="287"></img>
            </div>
            <div>
              <div className="ow_title">제품소개</div>
              <div className="ow_cnt">
                호닝은 금속과 비금속 재료에서 파이프의 내면이나 구멍의 내면을
                깎아 내기 <br />
                위한 정밀 마찰 가공입니다. 호닝 가공의 특성은 진원도를 바로잡고
                조도를 <br />
                향상하며 정밀 공차 가공이 가능합니다. 가공 면은 적절한 교각을
                지닌 <br />
                그물망 형태의 교차선(mesh)이 있어 윤활유막이 형성되어 실린더
                피스톤이
                <br />
                부드럽게 움직입니다.
              </div>
            </div>
            <div className="goDetail" onClick={this.cursorInit}>
              <Link className="goDetail atag" to="/products/honingPipe/">
                자세히보기
                <img src={arrow} alt="logo" width="13" height="13"></img>
              </Link>
            </div>
          </div>
        </div>
        <div className="mainAddress">
          <div className="comeAddress">
            <Link
              className="atag"
              to="/intro/direction/"
              onClick={this.cursorInit}
            >
              <div className="ca_title">찾아오시는 길</div>
            </Link>
            <Link
              className="atag"
              to="/intro/direction/"
              onClick={this.cursorInit}
            >
              <div className="ca_addr">
                <img src={locationImg} alt="logo" width="35" height="35"></img>
                <p>
                  경기 안산시 단원구 정왕천동로10번길 8 (시화공단 4바 901-1호)
                </p>
              </div>
            </Link>
            <div className="ca_tel">
              <img src={phoneImg} alt="logo" width="35" height="35"></img>
              <p>031)499-2777</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
