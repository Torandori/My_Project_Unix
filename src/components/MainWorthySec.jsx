import btnCircle from '../assets/images/svg/btnCircle.svg'
import { Link } from 'react-router-dom';

function MainWorthySec() {
  return (
    <section id="we-worthy-sec">
      <div className="container">
        <h3 className="h3">we are</h3>
        <div className="wrap">
          <div className="title-ending ">
            <span className="small-text">Born in Unix</span>  <span className="h3 margin">w</span>
            <span>
              <button type="button" className="btn btn-circle">
                <img src={btnCircle} alt="Contact us" />
              </button>
            </span>
            <span className="h3">rthy</span>
          </div>
          <div className="around-title small-text">
            Clients <br /> all around the globe
          </div>
        </div>

        <div className="worthy-grid">
          <div className="empty">
            <Link to="/" className="small-link">Get in touch!</Link>
          </div>
          <div className="border"></div>
          <div className="nocontent"></div>
          <div className="nocontent"></div>
          <div className="worthy-item">
            <p>Active users on marketplaces we&apos;ve created</p>
            <div>1m</div>
          </div>
          <div className="worthy-item clients">
            <p>Our clients raised owning to our design work</p>
            <div>$500m</div>
            <Link to="/" title="View our case link">view our case</Link>
          </div>
          <div className="worthy-item other-size">
            <p>People on board</p>
            <div>60+</div>
          </div>
          <div className="worthy-item other-size">
            <p>Years of growth</p>
            <div>7</div>
          </div>
          <div className="worthy-item other-size last">
            <p className="width">Successfully finished projects</p>
            <div>500+</div>
          </div>
          <div className="worthy-item no-count">
            <p>Wanna fill this cell with your success story</p>
          </div>
          <div className="worthy-item other-size">
            <p>Design awards</p>
            <div>80+</div>
          </div>
          <div className="worthy-item other">
            <p>Monthly visit on E-Commerce we designed</p>
            <div>25m</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainWorthySec;