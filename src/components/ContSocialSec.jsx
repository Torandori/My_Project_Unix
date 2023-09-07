import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
import VanillaTilt from 'vanilla-tilt';
const DribbleIcon  = lazy(() => import('./svgComponents/DribbleIcon'));
const Arrow  = lazy(() => import('./svgComponents/Arrow'));
const SocList  = lazy(() => import('./SocList'));
const TiltedCardCont  = lazy(() => import('./TiltedCardCont'));
lazy(() => import('../assets/scss/_tiltCard.scss'));
import soc from "../data/contSocialSec.json"
import Loader from "../components/Loader";
// import '../assets/scss/_tiltCard.scss'
// const SocList  = lazy(() => import('./SocList'));

// import DribbleIcon from "./svgComponents/DribbleIcon";
// import Arrow from "./svgComponents/Arrow";
// import SocList from "./SocList";
// import TiltedCardCont from "./TiltedCardCont";

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
            <Suspense fallback={<Loader />}>
              <DribbleIcon />
            </Suspense>
            </Link>
            <h2 className="name">{socLeft.socTitle}</h2>
            <Link to={socLeft.socTo} className="arrow" target="_blank" title={`Move to our social media` + `${socLeft.socLinkTitle}`} rel="noreferrer nofollow">
            <Suspense fallback={<Loader />}>
              <Arrow />
            </Suspense>
            </Link>
          </div>

          <div className="right-col">
            <div className="wrap-soc-projects">
              {socRight.map((item, index) => {
                return (
                  <div className="soc-project-wrap tiltWrap" key={index}> 
                  <Suspense fallback={<Loader />}>
                    <TiltedCardCont key={index} item={item} />
                  </Suspense>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <SocList />
        </Suspense>
      </div>
    </section>
  )
}
export default ContSocialSec; 