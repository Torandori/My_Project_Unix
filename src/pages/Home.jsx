import { useEffect } from 'react';
import '../assets/scss/main.scss'
import HeroSec from '../components/HeroSec';
import MainAboutCeoSec from '../components/MainAboutCeoSec';
import MainAboutSec from '../components/mainAboutSec';
import MainOurClientSec from '../components/MainOurClientSec';
import MainPastProjectsSec from '../components/MainPastProjectsSec';
import MainVideoSec from '../components/MainVideoSec';
import MainWitnessSec from '../components/MainWitnessSec';
import MainWorthySec from '../components/MainWorthySec';
import par from '../data/heroData.json'
import { Helmet } from 'react-helmet-async';
import pageTitle from '../data/pagesTitles.json';

function Home() {
  const heroPar = par.home;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

        <title>{pageTitle.home}</title>
        <meta name="description" content="Providing digital solutions for business. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Providing digital solutions for business" />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Strategic and creative services to clients, focusing on digital marketing, web design, development, and online branding." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
      </Helmet>
      <div className="main-body-bg main-page">
        <div className="main-grafic-bg">
          <HeroSec par={heroPar} />
          <MainAboutSec />
          <MainVideoSec />
          <MainWitnessSec />
          <MainAboutCeoSec />
          <MainPastProjectsSec />
          <MainWorthySec />
          <MainOurClientSec />
        </div>
      </div>
    </>
  )
}

export default Home;

