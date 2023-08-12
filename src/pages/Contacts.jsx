import HeroSec from "../components/HeroSec";
import ContContactsSec from "../components/ContContactsSec";
import ContSocialSec from "../components/contSocialSec";
import ContCareerSec from "../components/ContCareerSec";
import '../assets/scss/contacts.scss'
import par from '../data/heroData.json';

function Contacts() {
  const heroPar = par.contacts;

  return(
    <div id="contacts-page">
      <HeroSec par={heroPar} />
      <ContContactsSec />
      <ContSocialSec />
      <ContCareerSec />
    </div>
  )
}
export default Contacts;