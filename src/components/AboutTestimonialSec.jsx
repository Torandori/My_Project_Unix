import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const PromoLines = lazy(() => import('./PromoLines'));
import testimonialPic from "../assets/images/team-pic.jpg"
import testData from '../data/aboutTestimonial.json'
const AboutTestSlider = lazy(() => import('./AboutTestSlider'));
import Loader from "../components/Loader";

function AboutTestimonialSec() {
  return (
    <section id="testimonial-sec">
      <div className="container first">
        <div className="big-img-wrap">
          <LazyLoadImage
          src={testimonialPic}
          alt={testData.aboutPictureTitle}
          title={testData.aboutPicTitle}
          effect="black-and-white" 
        />
        </div>
        <div className="block-text-under-pic">
          <h2 className="h2" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{testData.aboutTestTitle}</h2>
          <p className="text first">{testData.aboutTestTextFirst}</p>
          <p className="text">{testData.aboutTestText}</p>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <AboutTestSlider />
      </Suspense>
      <div className="promo-second">
      <Suspense fallback={<Loader />}>
        <PromoLines />
      </Suspense>
      </div>
      <div className="container">
        <p className="testimonial-text">{testData.aboutTestUnderSlider}</p>
        <Link to="/services" className="small-link" title="Move to services page">
          <span className="mask">
            <div className="small-link-container">
              <span className="small-link-title1 title">{testData.aboutTestLinkText}</span>
              <span className="small-link-title2 title">{testData.aboutTestLinkText}</span>
            </div>
          </span>
        </Link>
      </div>
    </section>
  )
}
export default AboutTestimonialSec;