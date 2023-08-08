import btnCircle from '../assets/images/svg/btnCircle.svg'
import Flake from './svgComponents/Flake'
import heroData from '../data/heroData.json'

function HeroSec(){
  const _heroData = heroData[0];
  
  return (
    <section id="hero-sec">
      <div className="container separator">
        <h1 className="panchang">{_heroData.heroTitle}</h1>
        <div className="flake dark">
          <Flake />
        </div>
        <p>{_heroData.heroDescr}</p>
        <button type="button" className="btn btn-circle">
          <img src={btnCircle} alt="Contact us" />
        </button>
      </div>
    </section>
  )
}

export default HeroSec;