// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ceoData from '../data/mainAboutCeoSecData.json'
import { useRef } from "react";



function SliderCeo() {
  const ceo = ceoData.sliderCeo;
  const sliderRef = useRef()

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
  };

  function next() {
    sliderRef.current.slickNext();
  }

  return (
    <>
      <Slider ref={sliderRef} {...sliderSettings}>
        {ceo.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.ceoQuote}</p>
            </li> 
          )
        })}
      </Slider>
      <br/>
      <button type="button" onClick={next}>Next</button>
    </>
  )

}
export default SliderCeo;