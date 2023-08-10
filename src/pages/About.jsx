import HeroSec from "../components/HeroSec";
import AboutDescrSec from "../components/AboutDescrSec";
import '../assets/scss/about.scss';
import AboutTestimonialSec from "../components/AboutTestimonialSec";
import AboutPrinciplesSec from "../components/AboutPrinciplesSec";
import par from '../data/heroData.json';

function About(){
  const heroPar = par[2];

  return (
    <div className="about-grafic-bg" id="about-page">
      <HeroSec par={heroPar} />
      <AboutDescrSec />
      <AboutTestimonialSec />
      <AboutPrinciplesSec />
    </div>
  )
}
export default About;