import HeroSec from "../components/HeroSec";
import ServServicesSec from "../components/ServServicesSec";
import ServFundingSec from "../components/ServFundingSec";
import '../assets/scss/services.scss';
import par from '../data/heroData.json';

function Services() {
  const heroPar = par.services;
  return (
    <div id="services-page">
      <HeroSec par={heroPar} />
      <ServServicesSec />
      <ServFundingSec />
    </div>
  )
}
export default Services;