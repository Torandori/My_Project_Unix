import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSec from '../components/HeroSec';
import par from '../data/heroData.json'
import pageTitle from '../data/pagesTitles.json';
import loadable from '@loadable/component';
const MainAboutSec = loadable(() => import('../components/mainAboutSec'));
const MainAboutCeoSec = loadable(() => import('../components/MainAboutCeoSec'));
const MainOurClientSec = loadable(() => import('../components/MainOurClientSec'));
const MainPastProjectsSec = loadable(() => import('../components/MainPastProjectsSec'));
const MainVideoSec = loadable(() => import('../components/MainVideoSec'));
const MainWitnessSec = loadable(() => import('../components/MainWitnessSec'));
const MainWorthySec = loadable(() => import('../components/MainWorthySec'));

function Home() {
  const heroPar = par.home;

  useEffect(() => {
    const styleModules = import.meta.glob('../assets/scss/main.scss');

    Promise.all(Object.values(styleModules).map((styleModule) => styleModule()))
      .then(() => {
        console.log('Styles loaded');
      })
      .catch((error) => {
        console.error('Error while styles loading', error);
      });
  }, []);

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
          {/* <Suspense fallback={<Loader />}>
           <MainAboutSec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MainVideoSec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MainWitnessSec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MainAboutCeoSec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MainPastProjectsSec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MainWorthySec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <MainOurClientSec />
          </Suspense> */}
        </div>
      </div>
    </>
  )
}

export default Home;

