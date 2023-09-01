import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "./svgComponents/Arrow";
import projectSecData from "../data/mainPastProjectsSecData.json"
import React from "react";
import MainProjCardsAnim from "./MainProjCardsAnim";
// import '../helpers/hoverCurs.js'

function MainPastProjectsSec() {
  const [projects, setProjects] = useState([{}, {}]);
  const [services, setServices] = useState({ left: [], right: [] });

  // useEffect(() => {
  //   const links = document.querySelectorAll('.hover-me');
  //   const cursor = document.querySelector('.cursor');
  
  //   const animateMe = function(e) {
  //     const span = this.querySelector('span');
  //     const { offsetX: x, offsetY: y } = e,
  //           { offsetWidth: width, offsetHeight: height } = this;
      
  //     move = 20;
  //     xMove = x / width * (move * 2) - move;
  //     yMove = y / height * (move * 2) - move;
      
  //     span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      
  //     if (e.type === 'mouseleave') span.style.transform = '';
  //   };
    
  //   const editCursor = e => {
  //     const { clientX: x, clientY: y } = e;
  //     cursor.style.left = x + 'px';
  //     cursor.style.top = y + 'px';
  //   };
    
  //   links.forEach(link => link.addEventListener('mousemove', animateMe));
  //   links.forEach(link => link.addEventListener('mouseleave', animateMe));
  //   window.addEventListener('mousemove', editCursor);

  //   return () => {

  //   }
  // }, [])

  useEffect(() => {
    try {
      fetch('./pubdata/mainPastProjectsItems.json')
      .then(resp => resp.json())
      .then(resp => {
        setProjects(resp);
      })
    } catch (error) {
      console.log('An error occured while fetching data:', error)
    }
  }, []);
  

  useEffect(() => {
    try {
      fetch('./pubdata/mainServiceItems.json')
      .then(resp => resp.json())
      .then(resp => {
        setServices(resp);
      })
    } catch (error) {
      console.log('An error occurred while fetching data:', error)
    }
  }, []);

  let servicesLeft = services.left;
  let servicesRight = services.right;

  return (
    <section id="past-projects-sec">
      <div className="container">
        <div className="title">
          <h2 className="h2">{projectSecData.pastTitle}</h2>
          <div>{projectSecData.pastCount}</div>
        </div>
        <div className="projects-net">
          <div className="empty-cell"></div>
          <div className="projects-cells">
            <MainProjCardsAnim projects={projects}/>
          </div>
        </div>

        <div className="services">
          <div className="empty-cell"></div>
          <div className="content-cell">
            <div className="wrap">
              <div>{projectSecData.serviceTitle}</div>
              <p>{projectSecData.serviceDescr}</p>
            </div>
            <p className="continue">{projectSecData.serviceContinue}</p>

            <div className="services-cells">
              <div className="left-col">
                {servicesLeft.map((item, index) => {
                  return (
                    <div className="service-item" key={index}>
                      <div className="nav-wrapper">
                        <Link to={item.mainServiceTo} className="item-title" title={item.mainServiceLinkTitle}>
                          <div className="h3 panchang">{item.mainServiceName}</div>
                          <div className="arrow-btn">
                            <Arrow />
                          </div>
                        </Link>
                        <p className="item-descr">{item.mainServiceDescr}</p>
                      </div>
                  </div>
                  )
                })}
              </div>
              <div className="right-col">
                {servicesRight.map((item, index) => {
                    return (
                      <div className="service-item" key={index}>
                        <Link to={item.mainServiceTo} className="item-title" title={item.mainServiceLinkTitle}>
                          <div className="h3 panchang">{item.mainServiceName}</div>
                          <div className="arrow-btn">
                            <Arrow />
                          </div>
                        </Link>
                        <p className="item-descr">{item.mainServiceDescr}</p>
                    </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MainPastProjectsSec;
