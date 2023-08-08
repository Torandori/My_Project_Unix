import Arrow from './svgComponents/Arrow'
import Flake from './svgComponents/Flake'
import quote from '../assets/images/quote.svg'
import ceoPic from '../assets/images/ceo-pic.jpg'
import PromoLines from './PromoLines'
import ceoData from '../data/MainAboutCeoSecData.json'

function MainAboutCeoSec(){
  const _ceoData = ceoData[0];
  return(
    <section id="about-ceo-sec">
    <div className="container">
      <div className="wrap">
        <h2 className="h2">{_ceoData.ceoTitle}</h2>
        <div className="flake">
          <Flake />
        </div>
      </div>
      <div className="ceo-wrap">
        <div className="slider-descr">
          <div className="ceo-slider">
            <div className="quote">
              <img src={quote} alt="Quote picture" />
            </div>
            <ul>
              <li>
                <p>{_ceoData.ceoQuote}</p>
              </li>
            </ul>
          </div>

          <div className="gen-slider-descr">
            <div className="pic-wrap">
              <img src={ceoPic} alt="Picture of ceo" />
            </div>
            <div className="text">
              <div className="panchang">{_ceoData.ceoName}</div>
              <div>{_ceoData.ceoPosition}</div>
            </div>
            <div className="arrows">
              <div className="arrow-btn">
                <Arrow />
              </div>
              <div className="arrow-btn">
                 <Arrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PromoLines />
    

    <div className="container separator">
      <p className="under-run">{_ceoData.underLinesText}</p>
      <a href="/" className="small-link">{_ceoData.ceoLink}</a>
    </div>
  </section>

  )
}
export default MainAboutCeoSec;