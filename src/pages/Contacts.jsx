import HeroSec from "../components/HeroSec";
import ContContactsSec from "../components/ContContactsSec";
import ContSocialSec from "../components/contSocialSec";
import ContCareerSec from "../components/ContCareerSec";
import '../assets/scss/contacts.scss';
import par from '../data/heroData.json';
import pageTitle from '../data/pagesTitles.json';
import { Helmet } from "react-helmet-async";
// import { lazy, Suspense } from 'react';
// import Loader from '../components/Loader';
// const ContContactsSec = lazy(() => import('../components/ContContactsSec'));
// const ContSocialSec = lazy(() => import('../components/ContSocialSec'));
// const ContCareerSec = lazy(() => import('../components/ContCareerSec'));

function Contacts() {
  const heroPar = par.contacts;

  return(
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

        <title>{pageTitle.contacts}</title>
        <meta name="description" content="Connect with our digital agency's team of experts. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Connect with our digital agency's team of experts. " />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Whether you have inquiries, collaboration ideas, or projects in mind, we're here to help you navigate the digital landscape. Reach out to us today." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
      </Helmet>
      <div id="contacts-page">
        <HeroSec par={heroPar} />
        <ContContactsSec />
        <ContSocialSec />
        <ContCareerSec />
      </div>
    </>
  )
}
export default Contacts;