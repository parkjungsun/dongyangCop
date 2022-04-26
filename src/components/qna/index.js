import React, { Component } from "react";
import emailjs from "emailjs-com";

import Header from "../common/header";
import Footer from "../common/footer";
import Navi from "./navi";

class Qna extends Component {
  constructor(props) {
    super(props);
    this.sendMail = this.sendMail.bind(this);
  }
  sendMail() {
    var s_name = document.getElementById("from_name").value;
    var s_email = document.getElementById("from_email").value;
    var s_tel = document.getElementById("tel").value;
    var s_msg = document.getElementById("message").value;
    if (s_name === "") {
      alert("이름은 필수입력 항목입니다");
      return false;
    }
    if (s_tel === "") {
      alert("전화번호는 필수입력 항목입니다");
      return false;
    }
    if (s_msg === "") {
      alert("내용은 필수입력 항목입니다");
      return false;
    }
    var emailC = {
      from_name: s_name,
      from_email: s_email,
      tel: s_tel,
      message: s_msg,
    };
    emailjs.init("user_aKnohRucHNmTMpFkmvt6R");
    emailjs.send("service_uq6e1ny", "template_rg6d5zz", emailC).then(
      function (response) {
        console.log(
          "SUCCESS. status=%d, text=%s",
          response.status,
          response.text
        );
        alert("문의를 주셔서 감사합니다");
      },
      function (err) {
        console.log("FAILED. error=", err);
      }
    );
  }
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1304">
          <div className="introTitle2">
            <div className="introNm">온라인문의</div>
            <div className="underline35"></div>
          </div>
          <div className="subintro">
            <span>
              (주) 동양은 항상 고객 여러분의 목소리를 귀담아듣고 있습니다.
            </span>
          </div>
          <div className="sendBoxs">
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">이름 *</div>
              <div className="sendContent">
                <input id="from_name" type="text" maxLength="10" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">전화번호 *</div>
              <div className="sendContent">
                <input id="tel" type="text" maxLength="20" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">이메일</div>
              <div className="sendContent">
                <input id="from_email" type="text" maxLength="30" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">내용 *</div>
              <div className="sendContent">
                <textarea id="message" type="text" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="buttondiv">
              <button className="mailbutton" onClick={this.sendMail}>
                문의하기
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Qna;
