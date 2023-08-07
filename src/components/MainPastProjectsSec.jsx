import { Link } from "react-router-dom";
import PromoLines from "./PromoLines";
import Arrow from "./svgComponents/Arrow";
import olive from "../assets/images/olive-max.jpg"
import digit from "../assets/images/digit-clothing.jpg"



function MainPastProjectsSec() {
  return (
    <section id="past-projects-sec">
    <div className="container">
      <div className="title">
        <h2 className="h2">our past project</h2>
        <div>500+ PROJECTS</div>
      </div>
      <div className="projects-net">
        <div className="empty-cell"></div>
        <div className="projects-cells">
          <div className="project-descr">
            <div className="wrap">
              <div className="project-name">olive max</div>
              <Link to="https://us.oliveunion.com/" className="arrow-btn" target="_blank" title="Link to Olive project">
                <Arrow />
              </Link>
            </div>
            <p>The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.</p>
            <div>interface &amp; website</div>
          </div>
          <div className="project-pic">
            <div className="img-wrap">
              <img src={olive} alt="Olive Max project picture" />
            </div>
          </div>
          <div className="project-pic">
            <div className="img-wrap">
              <img src={digit} alt="Digit clothing picture" />
            </div>
          </div>
          <div className="project-descr">
            <div className="wrap">
              <div className="project-name">shock</div>
              <Link to="https://shock.se/eu/" className="arrow-btn" target="_blank" title="Link to Shock store project">
                <Arrow />
              </Link>
            </div>
            <p>The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.</p>
            <div>interface &amp; website</div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="empty-cell"></div>
        <div className="content-cell">
          <div className="wrap">
            <div>services</div>
            <p>We combine human empathy and intelligent data to provide the</p>
          </div>
          <p className="continue">highest level of satisfaction for our customers and their users.</p>

          <div className="services-cells">
            <div className="left-col">
              <div className="service-item">
                <Link to="serviceDetails.html" className="item-title" title="Find out more about Web app service">
                  <div className="h3 panchang">web app</div>
                  <div className="arrow-btn">
                    <Arrow />
                  </div>
                </Link>
                <p className="item-descr">The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.</p>
              </div>
              <div className="service-item">
                <div className="small-text">industries</div>
                <Link to="serviceDetails.html" className="item-title" title="Find out more about Mobile service">
                  <div className="h3 panchang">mobile</div>
                  <div className="arrow-btn">
                    <Arrow />
                  </div>
                </Link>
                <p className="item-descr">The platform allows incredible flexibility via creation, distribution, and purchasing features for the brands to stand out and create their own identity in the Metaverse.</p>
              </div>
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