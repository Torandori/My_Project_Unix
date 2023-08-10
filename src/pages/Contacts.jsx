import HeroSec from "../components/HeroSec";
import ContContactsSec from "../components/ContContactsSec";
import ContSocialSec from "../components/contSocialSec";
import ContCareerSec from "../components/ContCareerSec";

import '../assets/scss/contacts.scss'

function Contacts() {
  return(
    <div id="contacts-page">
      <HeroSec />
      <ContContactsSec />
      <ContSocialSec />
      <ContCareerSec />
    </div>
  )
}
export default Contacts;