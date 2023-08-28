// import { lazy, Suspense } from 'react';
import { useEffect } from "react";
import HeroSec from "../components/HeroSec";

// const ContContactsSec = lazy(() => import("../components/ContContactsSec"));
// const ContSocialSec = lazy(() => import("../components/ContSocialSec"));
// const ContCareerSec = lazy(() => import("../components/ContCareerSec"));

import ContContactsSec from "../components/ContContactsSec";
import ContSocialSec from "../components/contSocialSec";
import ContCareerSec from "../components/ContCareerSec";
import '../assets/scss/contacts.scss';
import par from '../data/heroData.json';

// const renderLoader = () => <p>Loading</p>;

function Contacts() {
  const heroPar = par.contacts;
  
  useEffect(()=>{
    window.document.title = 'Unix Contacts';
  }, []);

  return(
    <div id="contacts-page">
      {/* <Suspense fallback={renderLoader()}> */}
        <HeroSec par={heroPar} />
        <ContContactsSec />
        <ContSocialSec />
        <ContCareerSec />
      {/* </Suspense> */}
    </div>
  )
}
export default Contacts;