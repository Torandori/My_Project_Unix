import btnCircle from '../assets/images/svg/btnCircle.svg'
import Flake from './svgComponents/Flake';

function HeroSec(){
  return (
    <section id="hero-sec">
      <div className="container separator">
        <h1 className="panchang">unixstudio digit<span>al</span> a<span>gency</span></h1>
        <div className="flake dark">
          <Flake />
        </div>
        <p>We won 50+ desgin awards in 2022 stand alone, some of which had us share the stage with Google, Netflix, and Spotify</p>
        <button type="button" className="btn btn-circle">
          <img src={btnCircle} alt="Contact us" />
        </button>
      </div>
    </section>
  )
}

export default HeroSec;