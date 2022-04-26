import React, { Component } from "react";
import { withCookies } from "react-cookie";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Qna from "./qna";
import Gallary from "./gallery";
import HoningPipe from "./products/honingPipe";
import PlatingRod from "./products/platingRod";
import Direction from "./intro/direction";
import License from "./intro/license";
import Organization from "./intro/organization";
import History from "./intro/history";
import Greet from "./intro/greet";
import Main from "./main";

import QnaEn from "./qna/en";
import GallaryEn from "./gallery/en";
import HoningPipeEn from "./products/honingPipe/en";
import PlatingRodEn from "./products/platingRod/en";
import DirectionEn from "./intro/direction/en";
import LicenseEn from "./intro/license/en";
import OrganizationEn from "./intro/organization/en";
import HistoryEn from "./intro/history/en";
import GreetEn from "./intro/greet/en";
import MainEn from "./main/en";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/QnA/en" component={QnaEn} />
            <Route path="/QnA/" component={Qna} />
            <Route path="/gallary/en" component={GallaryEn} />
            <Route path="/gallary/" component={Gallary} />
            <Route path="/products/honingPipe/en" component={HoningPipeEn} />
            <Route path="/products/honingPipe/" component={HoningPipe} />
            <Route path="/products/platingRod/en" component={PlatingRodEn} />
            <Route path="/products/platingRod/" component={PlatingRod} />
            <Route path="/intro/direction/en" component={DirectionEn} />
            <Route path="/intro/direction/" component={Direction} />
            <Route path="/intro/license/en" component={LicenseEn} />
            <Route path="/intro/license/" component={License} />
            <Route path="/intro/organization/en" component={OrganizationEn} />
            <Route path="/intro/organization/" component={Organization} />
            <Route path="/intro/history/en" component={HistoryEn} />
            <Route path="/intro/history/" component={History} />
            <Route path="/intro/greet/en" component={GreetEn} />
            <Route path="/intro/greet/" component={Greet} />
            <Route path="/main/en" component={MainEn} />
            <Route path="/main/" component={Main} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default withCookies(App);
