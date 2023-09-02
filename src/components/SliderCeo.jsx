import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ceoData from '../data/mainAboutCeoSecData.json'
import quote from '../assets/images/svg/quote.svg'
import ceoPic from '../assets/images/ceo-pic.jpg'
import Arrow from "./svgComponents/Arrow";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function SliderCeo() {
  const ceo = ceoData.sliderCeo;
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    lazyLoad: true,
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
          <LazyLoadImage src={quote} alt="Quote picture" effect="blur" />
          {/* <img src={quote} alt="Quote picture" /> */}
        </div>
        {/* <ul> */}
          <Slider ref={sliderRef} {...sliderSettings}>
            {ceo.map((item, index) => {
              return (
                <div key={index}>
                  <p data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">{item.ceoQuote}</p>
                </div> 
              )
            })}
          </Slider>
        {/* </ul> */}
      </div>
      <div className="gen-slider-descr">
        <div className="pic-wrap">
          <LazyLoadImage src={ceoPic} alt="Picture of ceo" effect="blur" />
          {/* <img src={ceoPic} alt="Picture of ceo" /> */}
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


