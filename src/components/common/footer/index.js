import React, { Component } from "react";

import logo2 from "../../../img/main_logo2.png";

class Footer extends Component {
  render() {
    return (
      <div className="foot">
        <div className="summary">
          <div className="summaryLogo">
            <img src={logo2} alt="logo" width="28" height="27"></img>&nbsp; (주)
            동양
          </div>
          <div className="summaryInfo">
            <div className="nmBox">
              <div className="nm">회사명</div>
              <div className="nm">대표</div>
              <div className="nm">소재지</div>
            </div>
            <div className="cntBox">
              <div className="cnt">(주)동양</div>
              <div className="cnt">박우영</div>
              <div className="cnt">
                경기 안산시 단원구 정왕천동로10번길 8 (시화공단 4바 901-1호)
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
              <div className="cnt">031)499-2777</div>
              <div className="cnt">031)499-3345</div>
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
