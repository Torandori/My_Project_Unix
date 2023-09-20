import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from "../components/Loader";
const Fbs = lazy(() => import('./svgComponents/Fbs'));
const Ins = lazy(() => import('./svgComponents/Ins'));
import testData from '../data/aboutTestimonial.json'
import '../assets/scss/_testimonialTeamCards.scss'

function AboutTestSlider() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <div className="slider-team">
        {testData.aboutTestSlider.map((item, index) => {
          const cardClassName = "card card" + index;
          return (
            <div className={cardClassName} key={index}>
              <div className="border">
                <div className="pic-capt">{item.sliderMemberName}</div>
                <div className="img-wrap icons">
                  <Link to={item.sliderMemberToF} className="icon-item" title={`Visit social media of` + `${item.sliderMemberName}`} target="_blank" rel="noreferrer nofollow">
                    <Fbs />
                  </Link>
                  <Link to={item.sliderMemberToI} className="icon-item" title={`Visit social media of` + `${item.sliderMemberName}`} target="_blank" rel="noreferrer nofollow">
                    <Ins />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Suspense>
    </>
  )
}
export default AboutTestSlider;


