import { Link } from "react-router-dom";
// import { useEffect } from "react";
import Arrow from './svgComponents/Arrow';
import aboutData from '../data/mainAboutSecData.json'
import aboutAccord from '../data/mainAboutSecAccordData.json'
import '../assets/scss/_accordArrows.scss'


function MainAboutSec() {

  return (
    <section id="about-sec">
      <div className="container separator">
        <h2 className="h2">{aboutData.aboutTitle}</h2>
        <div className="subtext">{aboutData.aboutSubtext}</div>
        <div className="wrap">
          <p>{aboutData.aboutDescr}</p>
          <Link to={aboutData.aboutLinkTo} className="small-link" aria-label="Move to services page">{aboutData.aboutLinkText}</Link>
        </div>
        <div id="main-services" className="accordion panchang">
          {/* <ul className="panchang"> */}
            {aboutAccord.map((item, index) => {
                return (
                  <div tabIndex="1" key={index} className="accordion-item">
                    <div className="accord-header">
                      <div className="accord-title">{item.aboutAccordName}</div>
                      <div className="arrow-btn">
                        <Arrow />
                      </div>
                    </div>
                    <div className="accordion-item-content">
                      <p className="accordDescr">{item.aboutAccordDescr}</p>
                    </div>
                  </div>
                )
            })}
          {/* </ul> */}
        </div>
      </div>
    </section>
  )
}
export default MainAboutSec;

// return (
//   <li tabIndex="1" key={index}>
//     <div className="accord-header">
//       <div className="accord-title">{item.aboutAccordName}</div>
//       <div className="arrow-btn">
//         <Arrow />
//       </div>
//     </div>
//     <div className="accordion-content">
//       <p className="accordDescr">{item.aboutAccordDescr}</p>
//     </div>
//   </li>
// )