import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import DribbleIcon from "./svgComponents/DribbleIcon";
import Arrow from "./svgComponents/Arrow";
import soc from "../data/contSocialSec.json"
import SocList from "./SocList";
import VanillaTilt from 'vanilla-tilt';
import TiltedCardCont from "./TiltedCardCont";
import '../assets/scss/_tiltCard.scss'

function ContSocialSec() {
  const socLeft = soc.colLeft;
  const socRight = soc.colRight;

  const animatedCard = useRef(null);

  useEffect(() => {
    VanillaTilt.init(animatedCard.current, {
      max: 30,
      speed: 200,
      glare: true,
      "max-glare": 0.3
    });

    return () => {
    };
  }, []);


  return (
    <section id="social-sec">
      <div className="container">
        <div className="soc-projects-wrap">
          <div className="left-col">
            <Link to={socLeft.socTo} className="soc-icon-wrap" title={`Move to our social media` + `${socLeft.socLinkTitle}`} target="_blank" rel="nofollow noreferrer">
              <DribbleIcon />
            </Link>
            <h2 className="name">{socLeft.socTitle}</h2>
            <Link to={socLeft.socTo} className="arrow" target="_blank" title={`Move to our social media` + `${socLeft.socLinkTitle}`} rel="noreferrer nofollow">
              <Arrow />
            </Link>
          </div>

          <div className="right-col">
            <div className="wrap-soc-projects">
              {socRight.map((item, index) => {
                return (
                  <div className="soc-project-wrap tiltWrap" key={index}> 
                    <TiltedCardCont key={index} item={item} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <SocList />
      </div>
    </section>
  )
}
export default ContSocialSec; 