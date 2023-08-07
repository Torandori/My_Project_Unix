import { Link } from "react-router-dom";
import Arrow from "./svgComponents/Arrow";

function MainAboutSec() {
  return (
    <section id="about-sec">
      <div className="container separator">
        <h2 className="h2">let&apos;s find your design <span>product</span></h2>
        <div className="subtext">safe and beneficial design for humanity.</div>
        <div className="wrap">
          <p>We build engaging user experience for early-stage startups by connecting the dots between users&apos; needs and the client&apos;s business model.</p>
          <Link to="/" className="small-link">See Details</Link>
        </div>
        <div id="main-services">
          <ul className="panchang">
            <li tabIndex="1">
              <p>marketing and communication plan</p>
              <div className="arrow-btn">
                <Arrow />
              </div>
            </li>
            <li className="padding" tabIndex="1">
              <p>branding</p>
              <div className="arrow-btn">
                <Arrow />
              </div>
            </li>
            <li className="padding" tabIndex="1">
              <p>digital campaigns</p>
              <div className="arrow-btn">
                <Arrow />
              </div>
            </li>
            <li tabIndex="1">
              <p>programmatic advertising</p>
              <div className="arrow-btn">
                <Arrow />
              </div>
            </li>
            <li className="padding" tabIndex="1">
              <p>marketing as a service</p>
              <div className="arrow-btn">
                <Arrow />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
export default MainAboutSec;