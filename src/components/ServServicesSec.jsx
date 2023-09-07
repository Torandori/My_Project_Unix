import { Link } from "react-router-dom";
import { lazy, Suspense } from 'react';
const ThinArrow = lazy(() => import('./svgComponents/thinArrow'));
// import ThinArrow from "./svgComponents/thinArrow";
import servicesData from '../data/servServicesData.json'

function ServServicesSec() {
  return (
    <div id="services-sec">
      <div className="container">
        <div className="services-wrap">
          {servicesData.map((_item, index) => {
            const column = _item.col;
            return (
              <div className={_item.servicesColClass} key={index}>
                <div className="services-item-title neo-haas">
                  <div className="services-subtitle">{_item.servicesTitle}</div>
                </div>
                {column.map((item, index) => {
                  return (
                    <div className="services-item" key={index} data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
                      <Link to={"/services/" + item.servicesTo} className="wrap-text-arrow" title={item.servicesLinkTitle}>
                        <div className="wrap-number-text">
                          <div className="number">{item.number}</div>
                          <div className="text">{item.area}</div> 
                        </div>
                        <div className="arrow-btn">
                        <Suspense fallback={'loading'}>
                          <ThinArrow />
                        </Suspense>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ServServicesSec;