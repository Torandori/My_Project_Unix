import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import clientData from '../data/mainOurClient.json'
import quote from '../assets/images/quote.svg'
import { Fragment } from "react";

function SliderClient() {
  const client = clientData.clientSLider;

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
      {client.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="client-slider">
              <div className="quote">
                <img src={quote} alt="Quote picture" />
              </div>
              <ul>
                <li>
                  <p>{item.clientReviewStart}</p>
                  <p>{item.clientReviewEnd}</p>
                </li>
              </ul>
            </div>
            <div className="gen-slider-descr">
              <div className="pic-wrap">
                <img src={item.clientAvatarUrl} alt="Picture of Peter Visser" />
              </div>
              <div className="text">
                <div className="panchang">{item.clientName}</div>
                <div>{item.clientPosition}</div>
              </div>
            </div> 
          </React.Fragment>
        )
      })}
    </Slider>
  )
}
export default SliderClient;
