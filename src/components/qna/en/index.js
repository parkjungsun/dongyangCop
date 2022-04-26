import React, { Component } from "react";
import emailjs from "emailjs-com";

import Header from "../../common/header/en";
import Footer from "../../common/footer/en";
import Navi from "../navi/en";

class Qna extends Component {
  constructor(props) {
    super(props);
    this.sendMailE = this.sendMailE.bind(this);
  }
  sendMailE() {
    var s_name = document.getElementById("from_nameE").value;
    var s_email = document.getElementById("from_emailE").value;
    var s_tel = document.getElementById("telE").value;
    var s_msg = document.getElementById("messageE").value;
    if (s_name === "") {
      alert("Name is required");
      return false;
    }
    if (s_tel === "") {
      alert("Tel is required");
      return false;
    }
    if (s_msg === "") {
      alert("Content is required");
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
        alert("Thank you for your submission");
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
        <div className="mainfree">
          <div className="introTitle2">
            <div className="introNm">Online Q&A</div>
            <div className="underline35"></div>
          </div>
          <div className="subintro">
            <span>
              DongYang Co.,Ltd. is always listening to customers’ voices.
            </span>
          </div>
          <div className="sendBoxs">
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">Name *</div>
              <div className="sendContent">
                <input id="from_nameE" type="text" maxLength="30" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">Tel *</div>
              <div className="sendContent">
                <input id="telE" type="text" maxLength="20" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">E-mail</div>
              <div className="sendContent">
                <input id="from_emailE" type="text" maxLength="30" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="sendBox">
              <div className="sendTitle">Content *</div>
              <div className="sendContent">
                <textarea id="messageE" type="text" />
              </div>
            </div>
            <div className="boxline"></div>
            <div className="buttondiv">
              <button className="mailbutton" onClick={this.sendMailE}>
                Submit
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
