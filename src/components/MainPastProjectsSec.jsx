import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
const ArrowMainPast  = lazy(() => import('./svgComponents/Arrow'));
const MainProjCardsAnim  = lazy(() => import('./MainProjCardsAnim'));
import projectSecData from "../data/mainPastProjectsSecData.json";
import Loader from "../components/Loader";

function MainPastProjectsSec() {
  const [projects, setProjects] = useState([{}, {}]);
  const [services, setServices] = useState({ left: [], right: [] });

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
        <div className="title" data-aos="slide-right" data-aos-easing="ease-in-out-sine" data-aos-duration="600">
          <h2 className="h2">{projectSecData.pastTitle}</h2>
          <div>{projectSecData.pastCount}</div>
        </div>
        <div className="projects-net">
          <div className="empty-cell"></div>
          <div className="projects-cells">
          <Suspense fallback={<Loader />}>
            <MainProjCardsAnim projects={projects}/>
          </Suspense>
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
                {servicesLeft.map((item) => {
                  return (
                    <div className="service-item" key={item.mainServiceName} data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100">
                      <Link to={item.mainServiceTo} className="item-title" title={item.mainServiceLinkTitle}>
                        <div className="h3 panchang hoverText">{item.mainServiceName}</div>
                        <div className="arrow-btn">
                        <Suspense fallback={<Loader />}>
                          <ArrowMainPast />
                        </Suspense>
                        </div>
                      </Link>
                      <p className="item-descr" data-aos="slide-up" data-aos-easing="ease-in-cubic" data-aos-duration="500" data-aos-delay="200">{item.mainServiceDescr}</p>
                  </div>
                  )
                })}
              </div>
              <div className="right-col">
                {servicesRight.map((item) => {
                    return (
                      <div className="service-item" key={item.mainServiceName} data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100">
                        <Link to={item.mainServiceTo} className="item-title" title={item.mainServiceLinkTitle}>
                          <div className="h3 panchang hoverText">{item.mainServiceName}</div>
                          <div className="arrow-btn">
                            <Suspense fallback={<Loader />}>
                                <ArrowMainPast />
                            </Suspense>
                          </div>
                        </Link>
                        <p className="item-descr" data-aos="slide-up" data-aos-easing="ease-in-cubic" data-aos-duration="500" data-aos-delay="200">{item.mainServiceDescr}</p>
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
