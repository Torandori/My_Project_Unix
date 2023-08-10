import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


function SliderCeo() {
  const sliderSettings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnDotsHover: true,
    // centerMode: true,
    centerPadding: '100px',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return {
    

  }
}
export default SliderCeo;