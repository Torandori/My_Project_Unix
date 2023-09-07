import { useRef } from "react";
import { lazy, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import Slider from "react-slick";
const Slider  = lazy(() => import('react-slick'));
const ArrowSliderCeo  = lazy(() => import('./svgComponents/Arrow'));
import "slick-carousel/slick/slick.css";
import ceoData from '../data/mainAboutCeoSecData.json'
import quote from '../assets/images/svg/quote.svg'
import ceoPic from '../assets/images/ceo-pic.jpg'
// import Arrow from "./svgComponents/Arrow";
import Loader from "../components/Loader";

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
        </div>
        <Suspense fallback={<Loader />}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {ceo.map((item, index) => {
              return (
                <div key={index}>
                  <p data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">{item.ceoQuote}</p>
                </div> 
              )
            })}
          </Slider>
        </Suspense>
      </div>
      <div className="gen-slider-descr">
        <div className="pic-wrap">
          <LazyLoadImage src={ceoPic} alt="Picture of ceo" effect="blur" />
        </div>
        <div className="text">
          <div className="panchang">{ceoData.ceoName}</div>
          <div>{ceoData.ceoPosition}</div>
        </div>
        <div className="arrows">
          <div className="arrow-btn" onClick={prev}>
            <Suspense fallback={<Loader />}>
              <ArrowSliderCeo />
            </Suspense>
          </div>
          <div className="arrow-btn" onClick={next}>
            <Suspense fallback={<Loader />}>
              <ArrowSliderCeo />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
export default SliderCeo;


