
import { Link } from "react-router-dom";
import React from "react";
import { lazy, Suspense } from 'react';
const ArrowMainCards  = lazy(() => import('./svgComponents/Arrow'));
const MainAnimItem  = lazy(() => import('./MainAnimItem'));
// import Arrow from "./svgComponents/Arrow";
// import MainAnimItem from "./MainAnimItem";

function MainProjCardsAnim({projects}) {

  return (
    <>
      {projects.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="project-descr" key={index} data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100">
              <div className="wrap">
                <div className="project-name">{item.projName}</div>
                <Link to={item.projTo} className="arrow-btn" target="_blank" title={item.projLinkTitle}>
                  <Suspense fallback={'loading'}>
                    <ArrowMainCards />
                    <ArrowMainCards />
                  </Suspense>
                </Link>
              </div>
              <p>{item.projDescr}</p>
              <div>{item.projUnderText}</div>
            </div>
            <div className="project-pic" key={item.projName}>
              <Suspense fallback={'loading'}>
                <MainAnimItem item={item} />
              </Suspense>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}
export default MainProjCardsAnim;