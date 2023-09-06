import HeroSec from "../components/HeroSec";
import ServServicesSec from "../components/ServServicesSec";
import ServFundingSec from "../components/ServFundingSec";
import '../assets/scss/services.scss';
import par from '../data/heroData.json';
import { Helmet } from "react-helmet-async";
import pageTitle from '../data/pagesTitles.json';
// import { lazy, Suspense } from 'react';
// import Loader from '../components/Loader';
// const ServServicesSec = lazy(() => import('../components/ServServicesSec'));
// const ServFundingSec = lazy(() => import('../components/ServFundingSec'));

function Services() {
  const heroPar = par.services;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

        <title>{pageTitle.services}</title>
        <meta name="description" content="From web design and development to strategic marketing campaigns, our digital agency crafts tailored strategies to help you thrive in the digital landscape. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="From web design and development to strategic marketing campaigns, our digital agency crafts tailored strategies to help you thrive in the digital landscape." />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="From web design and development to strategic marketing campaigns, our digital agency crafts tailored strategies to help you thrive in the digital landscape." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />

      </Helmet>
      <div id="services-page">
        <HeroSec par={heroPar} />
        <ServServicesSec />
        <ServFundingSec />
        {/* <Suspense fallback={<Loader />}>
          <ServServicesSec />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <ServFundingSec />
        </Suspense> */}
      </div>
    </>
  )
}
export default Services;