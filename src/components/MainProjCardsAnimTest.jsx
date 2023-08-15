
import { useEffect, useState } from "react";
import React from "react";
import '../assets/scss/_animCard.scss'
import '../helpers/animateCard.js'
import { Link } from "react-router-dom";
import Arrow from "./svgComponents/Arrow";

function MainProjCardsAnim({projects}) {
  const animCards = document.querySelectorAll('.animCard');

  animCards.forEach($animCard => {
    let bounds; 

    function rotateToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      }
      const distance = Math.sqrt(center.x**2 + center.y**2);

      $animCard.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance)* 2}deg
        )
      `;

      $animCard.querySelector('.glow').style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width/2}px
          ${center.y * 2 + bounds.height/2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }

    $animCard.addEventListener('mouseenter', () => {
      bounds = $animCard.getBoundingClientRect();
      document.addEventListener('mousemove', rotateToMouse);
    });

    $animCard.addEventListener('mouseleave', () => {
      document.removeEventListener('mousemove', rotateToMouse);
      $animCard.style.transform = '';
      $animCard.style.background = '';
    });
  });
  
  return (
    <>
      {projects.map((item, index) => {
        const animCardClassName = "animCard animCard" + index;
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
              <div className={animCardClassName}>
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