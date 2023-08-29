import { Link } from 'react-router-dom'
import Flake from './svgComponents/Flake'
import PromoLines from './PromoLines'
import ceoData from '../data/mainAboutCeoSecData.json'
import SliderCeo from './SliderCeo'

function MainAboutCeoSec(){

  return(
    <section id="about-ceo-sec">
      <div className="container">
        <div className="wrap">
          <h2 className="h2">{ceoData.ceoTitle}</h2>
          <div className="flake">
            <Flake />
          </div>
        </div>
        <div className="ceo-wrap">
          <div className="slider-descr">
            <SliderCeo />
          </div>
        </div>
      </div>
      <PromoLines />
      <div className="container separator">
        <p className="under-run">{ceoData.underLinesText}</p>
        <Link to={ceoData.ceoLinkTo} className="small-link" title="Move to services page">{ceoData.ceoLinkText}</Link>
      </div>
    </section>
  )
}
export default MainAboutCeoSec;