import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React from "react";
import clientData from '../data/mainOurClient.json'
import quote from '../assets/images/quote.svg'
import Arrow from "./svgComponents/Arrow";

function SliderClient() {
  const client = clientData.clientSLider;
  const sliderClRef = useRef();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
  };
  function prev() {
    sliderClRef.current.slickPrev();
  }
  function next() {
    sliderClRef.current.slickNext();
  }


  return (
    <React.Fragment >
      <div className="flex-clients separator">
        <div className="client-wrap">
          <h3 className="h3">{clientData.clientTitleStart}</h3>
          <div className="h3">{clientData.clientTitleEnd}</div>
        </div>
        <div className="small-text">
          <p>{clientData.clientSmallTextStart}</p>
          <p>{clientData.clientSmallTextEnd}</p>
        </div>
        <div className="arrows">
          <div className="arrow-btn" onClick={next}>
            <Arrow />
          </div>
          <div className="arrow-btn" onClick={prev}>
            <Arrow />
          </div>
        </div>
      </div>
      <div className="flex-slider-sec">
        <div className="empty"></div>
        <div className="slider">
          <Slider {...sliderSettings}  ref={sliderClRef}>
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
        </div>
      </div>
    </React.Fragment>
  )
}
export default SliderClient;
