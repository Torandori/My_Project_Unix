import aboutDescr from '../data/aboutDescrSecData.json'
import { Link } from 'react-router-dom';
import stairs from "../assets/images/stairs.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function AboutDescrSec() {

  return (
    <div id="about-descr-sec">
      <div className="container">
        <div className="wrap-about">
          <div className="about-item" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="300">
            <div className="name">{aboutDescr.aboutDescrTitleLeft}</div>
            <p>{aboutDescr.aboutDescrTextLeft}</p>
          </div>
          <div className="about-item middle">
            <div className="img-wrap">
            <LazyLoadImage
              alt="Picture of stairs"
              src={stairs}
              effect="blur" 
            />
              {/* <img src={stairs} alt="Picture of stairs" /> */}
            </div>
            <Link to={'/contacts'} title="Move to Contact us page" className="link-under-pic small-link" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="400">
              <span className="mask">
                <div className="small-link-container">
                  <span className="small-link-title1 title">{aboutDescr.aboutBoost}</span>
                  <span className="small-link-title2 title">{aboutDescr.aboutBoost}</span>
                </div>
              </span>
              </Link>
          </div>
          <div className="about-item" data-aos="fade-left" data-aos-easing="ease" data-aos-duration="400" data-aos-delay="300">
            <div className="name">{aboutDescr.aboutDescrTitleLeft}</div>
            <p>{aboutDescr.aboutDescrTextLeft}</p>
          </div>
        </div>
        <p className="about-descr">{aboutDescr.textBelow}</p>
      </div>
    </div>
  )
}
export default AboutDescrSec;