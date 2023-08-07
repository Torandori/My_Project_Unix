import witnessSliderImg1 from "../assets/images/witness-slider-img1.jpg"
import witnessSliderImg2 from "../assets/images/witness-slider-img2.jpg"
import witnessSliderImg3 from "../assets/images/witness-slider-img3.jpg"
import witnessSliderImg4 from "../assets/images/witness-slider-img4.jpg"
import witnessSliderImg5 from "../assets/images/witness-slider-img5.jpg"
import witnessSliderImg6 from "../assets/images/witness-slider-img6.jpg"
import witnessSliderImg7 from "../assets/images/witness-slider-img7.jpg"
import witnessSliderImg8 from "../assets/images/witness-slider-img8.jpg"

function MainWitnessSec() {
  return (
    <section id="witness-sec">
    <div className="container">
      <h2 className="h2">Witness the beauty</h2>
      <div className="subtext">safe and beneficial design for humanity.</div>
      <div className="witness-slider">
        <ul>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg1} alt="Meditation Course picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">medit</div>
              <div>Website Design</div>
            </div>
          </li>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg2} alt="Blockchain Creators Economy Picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">sonox</div>
              <div>Blockchain</div>
            </div>
          </li>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg3} alt="Create 3d picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">mecha</div>
              <div>3D World</div>
            </div>
          </li>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg4} alt="Generate 3D with AI picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">hex</div>
              <div>3D AI Generator</div>
            </div>
          </li>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg5} alt="Ai home styling picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">foderma</div>
              <div>Quant Design</div>
            </div>
          </li>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg6} alt="Check your flights picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">wander</div>
              <div>Check Your Flight</div>
            </div>
          </li>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg7} alt="Justis library picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">justis</div>
              <div>Design System</div>
            </div>
          </li>
          <li>
            <div className="slider-img-wrap">
              <img src={witnessSliderImg8} alt="Travel agency picture" />
            </div>
            <div className="slider-descr">
              <div className="panchang">wave</div>
              <div>Travel experience</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default MainWitnessSec;