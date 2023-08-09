import { Link } from "react-router-dom";
import PromoLines from "./PromoLines";
import testimonialPic from "../assets/images/team-picture.jpg"
import testData from '../data/aboutTestimonial.json'
import AboutTestSlider from "./AboutTestSlider";

function AboutTestimonialSec() {
  return (
    <section id="testimonial-sec">
      <div className="container first">
        <div className="big-img-wrap">
          <img src={testimonialPic} alt={testData.aboutPictureTitle} />
        </div>
        <div className="block-text-under-pic">
          <h2 className="h2">{testData.aboutTestTitle}</h2>
          <p className="text first">{testData.aboutTestTextFirst}</p>
          <p className="text">{testData.aboutTestText}</p>
        </div>
        <AboutTestSlider />
      </div>
      <div className="promo-second">
        <PromoLines />
      </div>
      <div className="container">
        <p className="testimonial-text">{testData.aboutTestUnderSlider}</p>
        <Link to="/" className="small-link">{testData.aboutTestLinkText}</Link>
      </div>
    </section>
  )
}
export default AboutTestimonialSec;