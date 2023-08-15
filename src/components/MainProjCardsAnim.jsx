
import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Arrow from "./svgComponents/Arrow";
// import VanillaTilt from 'vanilla-tilt';
// import '../assets/scss/_tiltCardProj.scss'
import MainAnimItem from "./MainAnimItem";

function MainProjCardsAnim({projects}) {

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tiltElProj"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
  }, []);

  return (
    <>
      {projects.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {/* <div className="tiltElProj">
              <img src={item.projImgUrl} alt={item.projAlt} />
            </div> */}
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
              <MainAnimItem item={item} />
              {/* <div className="tiltElProj">
                <img src={item.projImgUrl} alt={item.projAlt} />
              </div> */}
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}
export default MainProjCardsAnim;