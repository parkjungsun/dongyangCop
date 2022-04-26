import React, { Component } from "react";

import logo2 from "../../../../img/main_logo2.png";

class Footer extends Component {
  render() {
    return (
      <div className="foot">
        <div className="summary">
          <div className="summaryLogo">
            <img src={logo2} alt="logo" width="28" height="27"></img>
            &nbsp;DONGYANG
          </div>
          <div className="summaryInfo">
            <div className="nmBox">
              <div className="nm">Company name</div>
              <div className="nm">CEO</div>
              <div className="nm">Office Adress</div>
            </div>
            <div className="cntBox">
              <div className="cnt">DONGYANG CO.,LTD.</div>
              <div className="cnt">Woo Young Park</div>
              <div className="cnt">
                8, Jeongwangcheondong-ro 10beon-gil, Danwon-gu,
                <br />
                Ansan-si, Gyeonggi-do, Republic of Korea
              </div>
            </div>
          </div>
          <div className="summaryContact">
            <div className="nmBox">
              <div className="nm">Tel</div>
              <div className="nm">Fax</div>
              <div className="nm">E-mail</div>
            </div>
            <div className="cntBox">
              <div className="cnt">+82-31-499-2777</div>
              <div className="cnt">+82-31-499-3345</div>
              <div className="cnt">dys1127@hanmail.net</div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © DONGYANG CO.,LTD. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;
