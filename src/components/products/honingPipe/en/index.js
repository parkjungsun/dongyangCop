import React, { Component } from "react";

import Header from "../../../common/header/en";
import Navi from "../../navi/en";
import Footer from "../../../common/footer/en";

import Img1 from "../../../../img/ProductOverView.png";
import Img2 from "../../../../img/honing1_en.png";
import Img3 from "../../../../img/honing2.png";
import Img4 from "../../../../img/honing3.png";

class HoningPipe extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main3400">
          <div className="introTitle">
            <div className="introNm">Honing Pipe</div>
            <div className="underline35"></div>
          </div>
          <div className="productOverView">
            <img src={Img1} width="582" height="327" alt="img1" />
            <div className="productNm1 en">
              Honing is a precision friction machining for cutting the inside of
              pipes or holes in metal and non-metallic materials. The
              characteristics of Honing processing can correct roundness,
              improve roughness, and enable precision tolerance processing. The
              machined surface has a mesh-shaped cross-line (mesh) with an
              appropriate angle, forming a lubricant film that moves the
              cylinder piston smoothly.
            </div>
          </div>
          <div className="board2">
            <div className="boardRow2">
              <div className="br_title2 rbar">Material</div>
              <div className="br_title2 en2">
                STKM13C mechanical structural carbon steel pipe(KSD 3517)
              </div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Tensile Strength</div>
              <div className="br_cnt2">Over 52kg/mm²</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Yield Point</div>
              <div className="br_cnt2">Over 39kg/mm²</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Elongation</div>
              <div className="br_cnt2">Over 15%</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Working Accuracy</div>
              <div className="br_cnt2">Roughness Of Surface - Within1.6S</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Strainghtness</div>
              <div className="br_cnt2">1mm/m</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">KSB0401</div>
              <div className="br_cnt2">
                H8(Allowable Limit Of Inner Diameter)
              </div>
            </div>
          </div>
          <div className="introTitle">
            <div className="introNm">Application case</div>
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
