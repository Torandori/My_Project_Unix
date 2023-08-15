
import { useEffect, useState } from "react";
import React from "react";
import '../assets/scss/_animCard.scss'
import '../helpers/animateCard.js'
import { Link } from "react-router-dom";
import Arrow from "./svgComponents/Arrow";

function MainProjCardsAnim({projects}) {
  // console.log(projects);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    function handleMouseMove(event) {
      setMousePosition({ x: event.clientX, y: event.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const bounds = {
    x: 0, 
    y: 0, 
    width: 560,
    height: 600,
  };

  const center = {
    x: mousePosition.x - bounds.x - bounds.width / 2,
    y: mousePosition.y - bounds.y - bounds.height / 2,
  };

  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  const cardStyle = {
    transform: isHovered
      ? `scale3d(1.07, 1.07, 1.07) rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)`
      : 'scale3d(1, 1, 1)',
  };

  const glowStyle = {
    backgroundImage: isHovered
      ? `radial-gradient(circle at ${center.x * 2 + bounds.width / 2}px ${center.y * 2 + bounds.height / 2}px, #ffffff55, #0000000f)`
      : 'none',
  };



  return (
    <>
      {projects.map((item, index) => {
        const animCardClassName = "animCard animCard" + index;
        // console.log(animCardClassName)
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
              <div 
              className={animCardClassName}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={cardStyle} 
              >
                3D Card 
                <div className="glow" style={glowStyle}></div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}
export default MainProjCardsAnim;