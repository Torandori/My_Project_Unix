import HeroSec from "../components/HeroSec";
import ServServicesSec from "../components/ServServicesSec";
import ServFundingSec from "../components/ServFundingSec";
import '../assets/scss/services.scss';


function Services() {
  return (
    <div id="services-page">
      <HeroSec />
      <ServServicesSec />
      <ServFundingSec />
    </div>
  )
}
export default Services;