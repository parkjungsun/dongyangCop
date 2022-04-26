import React, { Component } from "react";

import Header from "../../common/header";
import Navi from "../navi";
import Footer from "../../common/footer";

import Img1 from "../../../img/ProductOverView.png";
import Img2 from "../../../img/honing1.png";
import Img3 from "../../../img/honing2.png";
import Img4 from "../../../img/honing3.png";

class HoningPipe extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main3400">
          <div className="introTitle">
            <div className="introNm">호닝파이프</div>
            <div className="underline35"></div>
          </div>
          <div className="productOverView">
            <img src={Img1} width="582" height="327" alt="img1" />
            <div className="productNm1">
              호닝은 금속과 비금속 재료에서 파이프의 내면이나
              <br />
              구멍의 내면을 깎아 내기 위한 정밀 마찰 가공입니다. <br />
              호닝 가공의 특성은 진원도를 바로잡고 조도를 <br />
              향상하며 정밀 공차 가공이 가능합니다. 가공 면은 <br />
              적절한 교각을 지닌 그물망 형태의 교차선(mesh)이 <br />
              있어 윤활유막이 형성되어 실린더 피스톤이 부드럽게 <br />
              움직입니다.
            </div>
          </div>
          <div className="board2">
            <div className="boardRow2">
              <div className="br_title2 rbar">재질(Material)</div>
              <div className="br_title2">
                STKM13C 기계구조용탄소강강관(KSD 3517)
              </div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">인장강도(Tensile Strength)</div>
              <div className="br_cnt2">52kg/mm²이상</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">항복점(Yield Point)</div>
              <div className="br_cnt2">39kg/mm²이상</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">연신율(Elongation)</div>
              <div className="br_cnt2">15%이상(11,12호 시험편)</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">가공정도(Working Accuracy)</div>
              <div className="br_cnt2">
                면조도(Roughness Of Surface) - 1.6S이내
              </div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">진직도(Strainghtness)</div>
              <div className="br_cnt2">1mm/m</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">내경치수 허용한계(KSB0401)</div>
              <div className="br_cnt2">
                H8(Allowable Limit Of Inner Diameter)
              </div>
            </div>
          </div>
          <div className="introTitle">
            <div className="introNm">적용사례</div>
            <div className="underline35"></div>
          </div>
          <img className="pim" src={Img2} width="827" height="384" alt="img1" />
          <img
            className="pim"
            src={Img3}
            width="1017"
            height="613"
            alt="img1"
          />
          <img
            className="pim"
            src={Img4}
            width="1069"
            height="637"
            alt="img1"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default HoningPipe;
