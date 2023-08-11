import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ceoData from '../data/mainAboutCeoSecData.json'


function SliderCeo() {
  const ceo = ceoData.sliderCeo;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
  };

  return (
    <Slider {...sliderSettings}>
      {ceo.map((item, index) => {
        return (
          <li key={index}>
            <p>{item.ceoQuote}</p>
          </li> 
        )
      })}
    </Slider>
  )

}
export default SliderCeo;