import btnCircle from '../assets/images/svg/btnCircle.svg'
import Flake from './svgComponents/Flake'

function HeroServDet({descr}){
  const heroServ = descr.heroServ;
  console.log(descr);
  
  return (
    <section id="hero-sec">
      <div className="container separator">
        <h1 className="panchang">{heroServ.heroServTitle}</h1>
        <div className="flake dark">
          <Flake />
        </div>
        <p>{heroServ.heroServText}</p>
        <button type="button" className="btn btn-circle">
          <img src={btnCircle} alt="Contact us" />
        </button>
      </div>
    </section>
  )
}

export default HeroServDet;