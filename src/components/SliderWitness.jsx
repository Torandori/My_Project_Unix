import { useState, useEffect } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


function SliderWitness() {
  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    try {
      fetch('./pubdata/mainWitSliderItems.json')
      .then(resp => resp.json())
      .then(resp => {
        setSliderItems(resp);
      })
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  return (
    <Slider {...sliderSettings}>
      {sliderItems.map((item, index) => {
          return (
            <li key={index}>
              <div className="slider-img-wrap">
                <img src={item.witSliderImgUrl} alt={item.witSliderImgAlt} />
              </div>
              <div className="slider-descr">
                <div className="panchang">{item.witSliderItemTitle}</div>
                <div>{item.witSliderItemService}</div>
              </div>
            </li>
          )
        })}
    </Slider>

  )
}
export default SliderWitness;