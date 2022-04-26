import React, { Component } from "react";

import Header from "../../common/header";
import Navi from "../navi";
import Footer from "../../common/footer";

import Img1 from "../../../img/plating1.png";

class PlatingRod extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1304">
          <div className="introTitle">
            <div className="introNm">도금봉</div>
            <div className="underline35"></div>
          </div>
          <div className="productOverView2">
            <img src={Img1} width="510" height="362" alt="img1" />
            <div className="productNm2">
              도금봉은 주로 내마모성을 좋게 하기 위해 실시하는
              <br />
              비교적 두꺼운(5㎛ 이상으로 규정) 크롬도금입니다.
              <br />
              경도는700~1000 Hv 정도의 것이 사용됩니다.
              <br />
              이 경도는 열처리강, 질화강보다도 높습니다. 가열되면
              <br />
              도금 피막 중에 수소 방출이 일어나 경도가 저하됩니다.
              <br />
              300℃ 이상이 되면 경도는 급격히 저하되어 내마모성도
              <br />
              나빠집니다. 금형, 실린더 및 라이너, 피스톤 및 피스톤 로드,
              <br />
              피스톤 링, 녹이 발생 할 수 있는 환경이나 작업환경이
              <br />
              좋지 않은 경우에 적합합니다.
            </div>
          </div>
          <div className="board2">
            <div className="boardRow2">
              <div className="br_title2 rbar">재질(Material)</div>
              <div className="br_title2">S45C</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">표준규격</div>
              <div className="br_cnt2">⌀10~⌀100(기타 주문제작)</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">직진도</div>
              <div className="br_cnt2">≤0.2mm/1m</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">외경공차</div>
              <div className="br_cnt2">f8급</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">도금두께</div>
              <div className="br_cnt2">0.025~0.03mm이상</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">표면경도</div>
              <div className="br_cnt2">Hv 700</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">조도</div>
              <div className="br_cnt2">0.8s~1.2s</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PlatingRod;
