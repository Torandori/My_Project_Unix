import { Link } from "react-router-dom";
import React from "react";
import { lazy, Suspense } from 'react';
const ArrowMainProjCards  = lazy(() => import('./svgComponents/Arrow'));
lazy(() => import('../assets/scss/_animCard.scss'));
lazy(() => import('../helpers/animateCard.js'));
import Loader from "../components/Loader";

function MainProjCardsAnim({projects}) {
  
  return (
    <>
      {projects.map((item, index) => {
        const animCardClassName = "animCard animCard" + index;

        return (
          <React.Fragment key={index}>
            <div className="project-descr" key={index}>
              <div className="wrap">
                <div className="project-name">{item.projName}</div>
                <Suspense fallback={<Loader />}>
                  <Link to={item.projTo} className="arrow-btn" target="_blank" title={item.projLinkTitle}>
                    <ArrowMainProjCards />
                  </Link>
                </Suspense>
              </div>
              <p>{item.projDescr}</p>
              <div>{item.projUnderText}</div>
            </div>
            <div className="project-pic" key={item.projName}>
              <div className={animCardClassName}>
                3D Card 
                <div className="glow"></div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}
export default MainProjCardsAnim;