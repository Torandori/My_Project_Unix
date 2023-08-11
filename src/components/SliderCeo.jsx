import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ceoData from '../data/mainAboutCeoSecData.json'
import quote from '../assets/images/quote.svg'
import ceoPic from '../assets/images/ceo-pic.jpg'
import Arrow from "./svgComponents/Arrow";

function SliderCeo() {
  const ceo = ceoData.sliderCeo;
  const sliderRef = useRef();

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
    sliderRef.current.slickPrev();
  }
  function next() {
    sliderRef.current.slickNext();
  }

  return (
    <>
      <div className="ceo-slider">
        <div className="quote">
          <img src={quote} alt="Quote picture" />
        </div>
        <ul>
          <Slider ref={sliderRef} {...sliderSettings}>
            {ceo.map((item, index) => {
              return (
                <li key={index}>
                  <p>{item.ceoQuote}</p>
                </li> 
              )
            })}
          </Slider>
        </ul>
      </div>
      <div className="gen-slider-descr">
        <div className="pic-wrap">
          <img src={ceoPic} alt="Picture of ceo" />
        </div>
        <div className="text">
          <div className="panchang">{ceoData.ceoName}</div>
          <div>{ceoData.ceoPosition}</div>
        </div>
        <div className="arrows">
          <div className="arrow-btn" onClick={prev}>
            <Arrow />
          </div>
          <div className="arrow-btn" onClick={next}>
            <Arrow />
          </div>
        </div>
      </div>
    </>
  )
}
export default SliderCeo;


