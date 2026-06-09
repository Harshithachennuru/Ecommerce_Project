import React from "react";
import SlickSlider from "react-slick";

const Slider = SlickSlider.default || SlickSlider;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCarousel({images}) {  
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className="slider-container w-50" >
      <Slider {...settings}>
        {images && images.length>0 && images.map(img=>{
            return <div className="p-2 d-flex justify-content-center align-items-center">
                <img src={img} width={"300px"}alt="product image"/></div>
        })}
      </Slider>
    </div>
  );
}

export default ProductCarousel;
