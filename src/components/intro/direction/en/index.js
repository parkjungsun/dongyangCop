import React, { Component } from "react";

import Header from "../../../common/header/en";
import Navi from "../../navi/en";
import Footer from "../../../common/footer/en";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class Direction extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1455">
          <div className="introTitle">
            <div className="introNm">Directions</div>
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
              <div className="boardTitle1">Company Information</div>
              <div className="boardRow1">
                <div className="br_title1">Address</div>
                <div className="br_cnt1">
                  8, Jeongwangcheondong-ro 10beon-gil, Danwon-gu,
                  <br />
                  Ansan-si, Gyeonggi-do, Republic of Korea
                </div>
              </div>
              <div className="boardRow1">
                <div className="br_title1">TEL</div>
                <div className="br_cnt1">+82-31-499-2777</div>
              </div>
              <div className="boardRow1">
                <div className="br_title1">FAX</div>
                <div className="br_cnt1">+82-31-499-3345</div>
              </div>
              <div className="boardRow1">
                <div className="br_title1">E-mail</div>
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
