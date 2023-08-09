import HeroSec from "../components/HeroSec";
import ServDetDescrSec from "../components/ServDetDescrSec";
import ServDetHowSec from "../components/ServDetHowSec";
import "../assets/scss/serviceDetails.scss"

function ServiceDetails() {
  return (
    <div id="service-details-page" className="service-details-body-bg">
      <div className="service-details-grafic-bg" >
        <HeroSec />
        <ServDetDescrSec />
        <ServDetHowSec />
      </div>
    </div>
  )
}
export default ServiceDetails;