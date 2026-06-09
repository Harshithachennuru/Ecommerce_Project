import React from "react";
import SlickSlider from "react-slick";

const Slider = SlickSlider.default || SlickSlider;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel() {
  const settings = {
    className: "",
    dots: true,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay:true,
    speed:500,
    autoplaySpeed:2000
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
            <img src="shopping.jpeg" alt=""  height={'600px'} width={'100%'} style={{objectFit:'cover',objectPosition:'center'}}/>
        </div>
        <div>
          <img src="Couple_Shopping.jpeg" alt="" height={'600px'} width={'100%'} style={{objectFit:'cover',objectPosition:'up'}} />
        </div>
         
      </Slider>
    </div>
  );
}

export default Carousel;
