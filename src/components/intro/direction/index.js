import React, { Component } from "react";

import Header from "../../common/header";
import Navi from "../navi";
import Footer from "../../common/footer";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class Direction extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1455">
          <div className="introTitle">
            <div className="introNm">찾아오시는 길</div>
            <div className="underline35"></div>
          </div>
          <div className="introCnt3">
            <div className="map">
              <Map
                style={{ width: "990px", height: "543px" }}
                google={this.props.google}
                zoom={17}
                center={{ lat: 37.3147597034353, lng: 126.72551434746933 }}
                initialCenter={{
                  lat: 37.3147597034353,
                  lng: 126.72551434746933,
                }}
              >
                <Marker
                  position={{
                    lat: 37.3147597034353,
                    lng: 126.72551434746933,
                  }}
                />
              </Map>
            </div>
            <div className="board1">
              <div className="boardTitle1">회사정보</div>
              <div className="boardRow1">
                <div className="br_title1">주소</div>
                <div className="br_cnt1">
                  경기 안산시 단원구 정왕천동로10번길 8 (시화공단 4바 901-1호)
                </div>
              </div>
              <div className="boardRow1">
                <div className="br_title1">전화번호</div>
                <div className="br_cnt1">031)499-2777</div>
              </div>
              <div className="boardRow1">
                <div className="br_title1">팩스</div>
                <div className="br_cnt1">031)499-3345</div>
              </div>
              <div className="boardRow1">
                <div className="br_title1">이메일</div>
                <div className="br_cnt1">dys1127@hanmail.net</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAfnZUFyu65wAqZuJaaG6BXXrWhYAq0JXo",
})(Direction);
