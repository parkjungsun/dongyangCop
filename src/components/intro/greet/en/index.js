import React, { Component } from "react";

import Header from "../../../common/header/en";
import Navi from "../../navi/en";
import Footer from "../../../common/footer/en";

import Img from "../../../../img/intro_greet.png";

class Greet extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navi />
        <div className="main1455">
          <div className="introTitle">
            <div className="introNm">Greetings</div>
            <div className="underline35"></div>
          </div>
          <div className="introCnt">
            We would like to express our deep gratitude to our customers who
            always cherish and use our products.
            <br />
            <br />
            DONGYANG CO.,LTD. was established as a production company
            specializing in Honing Pipe in May 2000. To date, we are making bold
            investments in equipment and continuous improvement of work
            efficiency for better product quality and stable response to
            delivery. In addition, we strive to meet the ever-changing needs of
            our customers in order to produce products of various standards.
            <br />
            <br />
            DONGYANG CO.,LTD. will always keep the best product quality and
            delivery response to impress customers. We will do our best for safe
            management. We ask for your encouragement and wish you always happy
            and healthy.
            <br />
            <br />
            Thank you.
            <br />
            <br />
            CEO <span>WOO YOUNG PARK</span>
          </div>
          <img
            className="greetImg"
            src={Img}
            width="408"
            height="230"
            alt="intro"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Greet;
