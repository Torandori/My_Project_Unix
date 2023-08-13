import { useEffect } from "react";
import HeroSec from "../components/HeroSec";
import ServServicesSec from "../components/ServServicesSec";
import ServFundingSec from "../components/ServFundingSec";
import '../assets/scss/services.scss';
import par from '../data/heroData.json';

function Services() {
  const heroPar = par.services;

  useEffect(()=>{
    window.document.title = 'Unix Services';
  }, []);

  return (
    <div id="services-page">
      <HeroSec par={heroPar} />
      <ServServicesSec />
      <ServFundingSec />
    </div>
  )
}
export default Services;