import { Link } from 'react-router-dom';
import testData from '../data/aboutTestimonial.json'
import '../assets/scss/_testimonialTeamCards.scss'
import Fbs from './svgComponents/Fbs';
import Ins from './svgComponents/Ins';

function AboutTestSlider() {
  return (
    <div className="slider-team">
      {testData.aboutTestSlider.map((item, index) => {
        const cardClassName = "card card" + index;
        return (
          <div className={cardClassName} key={index}>
            <div className="border">
              <div className="pic-capt">{item.sliderMemberName}</div>
              <div className="img-wrap icons">
                <Link to={item.sliderMemberToF} className="icon-item" title={item.sliderMemberName} target="_blank" rel="noreferrer nofollow">
                  <Fbs />
                </Link>
                <Link to={item.sliderMemberToI} className="icon-item" title={item.sliderMemberName} target="_blank" rel="noreferrer nofollow">
                  <Ins />
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default AboutTestSlider;


