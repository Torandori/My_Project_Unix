import { Link } from "react-router-dom";
import Arrow from './svgComponents/Arrow';
import aboutData from '../data/mainAboutSecData.json'
import aboutAccord from '../data/mainAboutSecAccordData.json'
import '../assets/scss/_accordArrows.scss'
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";


function MainAboutSec() {
  const isMobile = useMediaQuery({ maxWidth: 880 });

  return (
    <section id="about-sec">
      <div className="container separator">
        {isMobile ? (
          <>
            <h2 className="h2" >{aboutData.aboutTitle}</h2>
            <div className="subtext">{aboutData.aboutSubtext}</div>
          </>
        ): (
          <>
            <Parallax translateX={['-200px', '200px']}>
              <h2 className="h2" >{aboutData.aboutTitle}</h2>
            </Parallax>
            <Parallax translateX={['200px', '-200px']}>
              <div className="subtext">{aboutData.aboutSubtext}</div>
            </Parallax>
          </>
        )}
        <div className="wrap">
          <p data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{aboutData.aboutDescr}</p>
          <Link to={aboutData.aboutLinkTo} className="small-link" title="Move to services page" data-aos="fade-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100">
            <span className="mask">
              <div className="small-link-container">
                <span className="small-link-title1 title">{aboutData.aboutLinkText}</span>
                <span className="small-link-title2 title">{aboutData.aboutLinkText}</span>
              </div>
            </span>
          </Link>
        </div>
        <div id="main-services" className="accordion panchang">
          {/* <ul className="panchang"> */}
            {aboutAccord.map((item, index) => {
                return (
                  <div key={index} className="accordion-item">
                    <div className="accord-header">
                      <div className="accord-title">{item.aboutAccordName}</div>
                      <div className="arrow-btn">
                        <Arrow />
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