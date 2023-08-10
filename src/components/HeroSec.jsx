import btnCircle from '../assets/images/svg/btnCircle.svg'
import Flake from './svgComponents/Flake'
import heroData from '../data/heroData.json'

function HeroSec(props){
  const _heroData = heroData[0];
  const heroD = props.par;
  console.log(heroD)
  
  return (
    <section id="hero-sec">
      <div className="container separator">
        <h1 className="panchang">{heroD.heroTitle}</h1>
        {/* <h1 className="panchang">{props.title}</h1> */}
        {/* <h1 className="panchang">{_heroData.heroTitle}</h1> */}
        <div className="flake dark">
          <Flake />
        </div>
        <p>{heroD.heroDescr}</p>
        <button type="button" className="btn btn-circle">
          <img src={btnCircle} alt="Contact us" />
        </button>
      </div>
    </section>
  )
}

export default HeroSec;