import { useEffect } from "react";
import HeroSec from "../components/HeroSec";
import ContContactsSec from "../components/ContContactsSec";
import ContSocialSec from "../components/contSocialSec";
import ContCareerSec from "../components/ContCareerSec";
import '../assets/scss/contacts.scss'
import par from '../data/heroData.json';

function Contacts() {
  const heroPar = par.contacts;
  
  useEffect(()=>{
    window.document.title = 'Unix Contacts';
  }, []);

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