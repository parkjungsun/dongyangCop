import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../common/header/en";
import Footer from "../../common/footer/en";

import locationImg from "../../../img/location.png";
import phoneImg from "../../../img/phone.png";
import cop from "../../../img/CopOverView.png";
import product from "../../../img/ProductOverView.png";
import arrow from "../../../img/db_arrow.png";

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
              A manufacturer specializing in Honing Pipe and Plating Rod
            </p>
          </div>
        </div>
        <div className="mainOverview">
          <div className="owBox">
            <div>
              <img src={cop} alt="logo" width="510" height="287"></img>
            </div>
            <div>
              <div className="ow_title">About Company</div>
              <div className="ow_cnt">
                DONGYANG CO.,LTD. was established as a production company
                specializing in Honing Pipe in May 2000. To date, we are making
                bold investments in equipment and continuous improvement of work
                efficiency for better product quality and stable response to
                delivery. In addition, we strive to meet the ever-changing needs
                of our customers in order to produce products of various
                standards.
              </div>
            </div>
            <div className="goDetailEN" onClick={this.cursorInit}>
              <Link className="goDetail atag" to="/intro/greet/en/">
                MORE
                <img src={arrow} alt="logo" width="13" height="13"></img>
              </Link>
            </div>
          </div>
          <div className="owBox">
            <div>
              <img src={product} alt="logo" width="510" height="287"></img>
            </div>
            <div>
              <div className="ow_title">Products</div>
              <div className="ow_cnt">
                Honing is a precision friction machining for cutting the inside
                of pipes or holes in metal and non-metallic materials. The
                characteristics of Honing processing can correct roundness,
                improve surface roughness, and enable precision tolerance
                processing. The machined surface has a mesh-shaped cross-line
                (mesh) with an appropriate angle, forming a lubricant film that
                moves the cylinder piston smoothly.
              </div>
            </div>
            <div className="goDetailEN" onClick={this.cursorInit}>
              <Link className="goDetail atag" to="/products/honingPipe/en/">
                MORE
                <img src={arrow} alt="logo" width="13" height="13"></img>
              </Link>
            </div>
          </div>
        </div>
        <div className="mainAddress">
          <div className="comeAddress">
            <Link
              className="atag"
              to="/intro/direction/en"
              onClick={this.cursorInit}
            >
              <div className="ca_title">Directions</div>
            </Link>
            <Link
              className="atag"
              to="/intro/direction/en"
              onClick={this.cursorInit}
            >
              <div className="ca_addr">
                <img src={locationImg} alt="logo" width="35" height="35"></img>
                <p>
                  8, Jeongwangcheondong-ro 10beon-gil, Danwon-gu,
                  <br />
                  Ansan-si, Gyeonggi-do, Republic of Korea
                </p>
              </div>
            </Link>
            <div className="ca_tel">
              <img src={phoneImg} alt="logo" width="35" height="35"></img>
              <p>+82-31-499-2777</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
