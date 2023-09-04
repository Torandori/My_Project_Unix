import { Link } from 'react-router-dom'
import Flake from './svgComponents/Flake'
import PromoLines from './PromoLines'
import ceoData from '../data/mainAboutCeoSecData.json'
import SliderCeo from './SliderCeo';
import { Parallax } from "react-scroll-parallax";

function MainAboutCeoSec(){

  return(
    <section id="about-ceo-sec">
      <div className="container">
        <div className="wrap">
          <h2 className="h2">{ceoData.ceoTitle}</h2>
          <div className="flake"> 
           <Parallax rotate={['0', '360']}>
             <Flake />
           </Parallax>
          </div>
        </div>
        <div className="ceo-wrap">
          <div className="slider-descr">
            <SliderCeo />
          </div>
        </div>
      </div>
      <PromoLines />
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