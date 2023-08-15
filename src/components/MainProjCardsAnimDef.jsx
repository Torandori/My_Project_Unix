
import { useEffect, useState } from "react";
import React from "react";
import '../assets/scss/_animCard.scss'
import '../helpers/animateCard.js'
import { Link } from "react-router-dom";
import Arrow from "./svgComponents/Arrow";

function MainProjCardsAnim({projects}) {
  
  return (
    <>
      {projects.map((item, index) => {
        const animCardClassName = "animCard animCard" + index;
        console.log(animCardClassName)

        return (
          <React.Fragment key={index}>
            <div className="project-descr" key={index}>
              <div className="wrap">
                <div className="project-name">{item.projName}</div>
                <Link to={item.projTo} className="arrow-btn" target="_blank" title={item.projLinkTitle}>
                  <Arrow />
                </Link>
              </div>
              <p>{item.projDescr}</p>
              <div>{item.projUnderText}</div>
            </div>
            <div className="project-pic" key={item.projName}>
              <div class={animCardClassName}>
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