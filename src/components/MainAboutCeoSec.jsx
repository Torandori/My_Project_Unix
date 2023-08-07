import Arrow from './svgComponents/Arrow'
import Flake from './svgComponents/Flake'
import quote from '../assets/images/quote.svg'
import ceoPic from '../assets/images/ceo-pic.jpg'
import PromoLines from './PromoLines'

function MainAboutCeoSec(){
  return(
    <section id="about-ceo-sec">
    <div className="container">
      <div className="wrap">
        <h2 className="h2">about ceo</h2>
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
                <p>This is the highest level of professionalism I have ever encountered in the years that I have been hiring people in this field. You have the distinct impression that you are a part of a productive team.</p>
              </li>
            </ul>
          </div>

          <div className="gen-slider-descr">
            <div className="pic-wrap">
              <img src={ceoPic} alt="Picture of ceo" />
            </div>
            <div className="text">
              <div className="panchang">Rachel Wilson</div>
              <div>CEO of Unix Studio</div>
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
      <p className="under-run">Don&apos;t wait any longer, let&apos;s unleash your imagination and create something extraordinary together!</p>
      <a href="/" className="small-link">Catch a glimse!</a>
    </div>
  </section>

  )
}
export default MainAboutCeoSec;