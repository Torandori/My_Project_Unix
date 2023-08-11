import Arrow from './svgComponents/Arrow'
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
      <a href="/" className="small-link">{ceoData.ceoLink}</a>
    </div>
  </section>
  )
}
export default MainAboutCeoSec;