import React, { Component } from "react";

import Header from "../common/header";
import Footer from "../common/footer";
import Navi from "./navi";
import Img1 from "../../img/galleryImg1.png";
import Img2 from "../../img/galleryImg2.png";
//import Img3 from "../../img/galleryImg3.png";
import Img4 from "../../img/galleryImg4.png";
import Img5 from "../../img/galleryImg5.png";
import Img6 from "../../img/galleryImg6.png";
import Img7 from "../../img/galleryImg7.png";
import Img8 from "../../img/galleryImg8.png";
import Img9 from "../../img/galleryImg9.png";
//import Img10 from "../../img/galleryImg10.png";
//import Img11 from "../../img/galleryImg11.png";
import Img12 from "../../img/galleryImg12.png";
//import Img13 from "../../img/galleryImg13.png";
//import Img14 from "../../img/galleryImg14.png";
import Img15 from "../../img/galleryImg15.png";
import Img16 from "../../img/galleryImg16.png";
import Img17 from "../../img/galleryImg17.png";
import Img18 from "../../img/galleryImg18.png";
import Img19 from "../../img/galleryImg19.jpg";
import Img20 from "../../img/galleryImg20.jpg";

class Gallery extends Component {
  render() {
    const Img = [
      Img1,
      Img2,
      //      Img3,
      Img4,
      Img5,
      Img6,
      Img7,
      Img8,
      Img9,
      //      Img10,
      //      Img11,
      Img12,
      //      Img13,
      //      Img14,
      Img15,
      Img16,
      Img17,
      Img18,
      Img19,
      Img20,
    ];
    const ImgList = Img.map((item) => (
      <div>
        <img
          className="galleryItem"
          src={item}
          width="378"
          height="378"
          alt="img"
        />
      </div>
    ));
    return (
      <div>
        <Header />
        <Navi />
        <div className="main3400">
          <div className="galleryBox">{ImgList}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Gallery;
