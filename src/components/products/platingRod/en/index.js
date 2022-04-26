import React, { Component } from "react";

import Header from "../../../common/header/en";
import Navi from "../../navi/en";
import Footer from "../../../common/footer/en";

import Img1 from "../../../../img/plating1.png";

class PlatingRod extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1304">
          <div className="introTitle">
            <div className="introNm">Plating Rod</div>
            <div className="underline35"></div>
          </div>
          <div className="productOverView2">
            <img src={Img1} width="510" height="362" alt="img1" />
            <div className="productNm2 en">
              Plating rods are mainly used to improve abrasion resistance. It is
              a relatively thick (specified over 5㎛) chrome plating. Hardness
              of 700~1000 Hv is used. This hardness is higher than that of heat
              treated steel and nitrided steel. When heated, hydrogen is
              released in the plating film and the hardness decreases. When the
              temperature exceeds 300℃, the hardness decreases rapidly and the
              wear resistance deteriorates. Suitable for molds, cylinders and
              liners, pistons and piston rods, piston rings in environments
              where rust may occur or poor working conditions.
            </div>
          </div>
          <div className="board2">
            <div className="boardRow2">
              <div className="br_title2 rbar">Material</div>
              <div className="br_title2">S45C</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Standard</div>
              <div className="br_cnt2">⌀10~⌀100(Custom-made available)</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Straightness</div>
              <div className="br_cnt2">≤0.2mm/1m</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">D. Tolerance</div>
              <div className="br_cnt2">f8</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Chrome Layer</div>
              <div className="br_cnt2">Over 0.025~0.03mm</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Surface Hardness</div>
              <div className="br_cnt2">Hv 700</div>
            </div>
            <div className="boardRow2">
              <div className="br_cnt2 rbar">Surface Roughness</div>
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
