import { useRef, useState, useEffect } from "react";
import { lazy, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import Slider from "react-slick";
const Slider  = lazy(() => import('react-slick'));
import "slick-carousel/slick/slick.css";
const ArrowSliderClient  = lazy(() => import('./svgComponents/Arrow'));
import React from "react";
import quote from '../assets/images/svg/quote.svg'

// import Arrow from "./svgComponents/Arrow";

function SliderClient() {
  const sliderClRef = useRef();
  
  const [clientData, setClientData] = useState({ clientSlider: []});
  
  useEffect(() => {
    try {
      fetch('./pubdata/mainOurClient.json')
      .then(resp => resp.json())
      .then(resp => {
        setClientData(resp);
      })
    } catch (error) {
      console.log(error);
    }
  }, [])

  const client = clientData.clientSlider;
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,
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
            <Suspense fallback={'loading'}>
              <ArrowSliderClient />
            </Suspense>
          </div>
          <div className="arrow-btn" onClick={prev}>
            <Suspense fallback={'loading'}>
              <ArrowSliderClient />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="flex-slider-sec">
        <div className="empty"></div>
        <div className="slider">
        <Suspense fallback={'loading'}>
          <Slider {...sliderSettings}  ref={sliderClRef}>
            {client.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="client-slider">
                    <div className="quote">
                      <LazyLoadImage src={quote} alt="Quote picture" effect="blur" />
                    </div>
                    <ul>
                      <li>
                        <p data-aos="fade-up-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{item.clientReviewStart}</p>
                        <p data-aos="fade-up-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200">{item.clientReviewEnd}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="gen-slider-descr">
                    <div className="pic-wrap">
                      <LazyLoadImage src={item.clientAvatarUrl} alt={item.clientName} effect="blur" />
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
        </Suspense>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SliderClient;
