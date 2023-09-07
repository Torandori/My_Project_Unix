import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react';
const Flake  = lazy(() => import('./svgComponents/Flake'));
const PromoLines  = lazy(() => import('./PromoLines'));
const SliderCeo  = lazy(() => import('./SliderCeo'));
import Loader from "../components/Loader";
// import SliderCeo from './SliderCeo';
// import Flake from './svgComponents/Flake'
// import PromoLines from './PromoLines'
import ceoData from '../data/mainAboutCeoSecData.json'
import { Parallax } from "react-scroll-parallax";

function MainAboutCeoSec(){

  return(
    <section id="about-ceo-sec">
      <div className="container">
        <div className="wrap">
          <h2 className="h2">{ceoData.ceoTitle}</h2>
          <Suspense fallback={<Loader />}>
            <div className="flake"> 
            <Parallax rotate={['0', '360']}>
              <Flake />
            </Parallax>
            </div>
          </Suspense>
        </div>
        <div className="ceo-wrap">
          <div className="slider-descr">
            <Suspense fallback={<Loader />}>
              <SliderCeo />
            </Suspense>
          </div>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <PromoLines />
      </Suspense>
      <div className="container separator">
        <p className="under-run" data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">{ceoData.underLinesText}</p>
        <Link to={ceoData.ceoLinkTo} className="small-link" title="Move to services page" data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-duration="600" data-aos-delay="300">
          <span className="mask">
            <div className="small-link-container">
              <span className="small-link-title1 title">{ceoData.ceoLinkText}</span>
              <span className="small-link-title2 title">{ceoData.ceoLinkText}</span>
            </div>
          </span>
        </Link>
      </div>
    </section>
  )
}
export default MainAboutCeoSec;