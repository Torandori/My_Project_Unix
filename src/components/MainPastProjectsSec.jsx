import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PromoLines from "./PromoLines";
import Arrow from "./svgComponents/Arrow";
import projectSecData from "../data/MainPastProjectsSecData.json"


function MainPastProjectsSec() {
  const _projectSecData = projectSecData[0];
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./pubdata/mainPastProjectsItem.json')
    .then(resp => resp.json())
    .then(resp => {
      setProjects(resp);
    })
  }, []);

  useEffect(() => {
    fetch('./pubdata/mainServiceItem.json')
    .then(resp => resp.json())
    .then(resp => {
      setServices(resp);
    })
  }, []);

  return (
    <section id="past-projects-sec">
    <div className="container">
      <div className="title">
        <h2 className="h2">{_projectSecData.pastTitle}</h2>
        <div>{_projectSecData.pastCount}</div>
      </div>
      <div className="projects-net">
        <div className="empty-cell"></div>
        <div className="projects-cells">
          {projects.map((item, index) => {
            return (
              < >
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
                  <div className="img-wrap">
                    <img src={item.projImgUrl} alt={item.projAlt} />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <div className="services">
        <div className="empty-cell"></div>
        <div className="content-cell">
          <div className="wrap">
            <div>{_projectSecData.serviceTitle}</div>
            <p>{_projectSecData.serviceDescr}</p>
          </div>
          <p className="continue">{_projectSecData.serviceContinue}</p>

          <div className="services-cells">
            <div className="left-col">
              {services.map((item, index) => {
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
            <div className="right-col">
              <div className="service-item">
                <Link to="serviceDetails.html" className="item-title" title="Find out more about Saas service"> 
                  <div className="h3 panchang">saas</div>
                  <div className="arrow-btn">
                    <Arrow />
                  </div>
                </Link>
                <p className="item-descr">The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.</p>
              </div>
              <div className="service-item">
                <Link to="serviceDetails.html" className="item-title" title="Find out more about Software service">
                  <div className="h3 panchang">software to clouds</div>
                  <div className="arrow-btn">
                    <Arrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="promo-second">
      <PromoLines />
    </div>
    </section>
  )
}
export default MainPastProjectsSec;