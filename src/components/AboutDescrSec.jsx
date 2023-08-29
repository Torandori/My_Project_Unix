import aboutDescr from '../data/aboutDescrSecData.json'
import { Link } from 'react-router-dom';
import stairs from "../assets/images/stairs.png"

function AboutDescrSec() {

  return (
    <div id="about-descr-sec">
      <div className="container">
        <div className="wrap-about">
          <div className="about-item">
            <div className="name">{aboutDescr.aboutDescrTitleLeft}</div>
            <p>{aboutDescr.aboutDescrTextLeft}</p>
          </div>
          <div className="about-item middle">
            <div className="img-wrap">
              <img src={stairs} alt="Picture of stairs" />
            </div>
            <Link to={'/contacts'} title="Move to Contact us page" className="link-under-pic">{aboutDescr.aboutBoost}</Link>
          </div>
          <div className="about-item">
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