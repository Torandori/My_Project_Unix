import { Link } from "react-router-dom";
import Arrow from './svgComponents/Arrow';
import aboutData from '../data/MainAboutSecData.json'
import aboutAccord from '../data/MainAboutSecAccordData.json'

function MainAboutSec() {
  const _aboutData = aboutData[0];

  return (
    <section id="about-sec">
      <div className="container separator">
        <h2 className="h2">{_aboutData.aboutTitle}</h2>
        <div className="subtext">{_aboutData.aboutSubtext}</div>
        <div className="wrap">
          <p>{_aboutData.aboutDescr}</p>
          <Link to="/" className="small-link">{_aboutData.aboutLinkText}</Link>
        </div>
        <div id="main-services">
          <ul className="panchang">
            {aboutAccord.map((item, index) => {
                return (
                  <li tabIndex="1" key={index}>
                    <p>{item.aboutAccordName}</p>
                    <div className="arrow-btn">
                      <Arrow />
                    </div>
                  </li>
                )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
export default MainAboutSec;