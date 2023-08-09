import { Link } from "react-router-dom";
import ThinArrow from "./svgComponents/thinArrow";
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
                    <div className="services-item" key={index}>
                      <Link to={item.servicesTo} className="wrap-text-arrow" title={item.servicesLinkTitle}>
                        <div className="wrap-number-text">
                          <div className="number">{item.number}</div>
                          <div className="text">{item.area}</div> 
                        </div>
                        <div className="arrow-btn">
                          <ThinArrow />
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