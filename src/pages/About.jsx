import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSec from "../components/HeroSec";
const AboutDescrSec = lazy(() => import('../components/AboutDescrSec'));
const AboutTestimonialSec = lazy(() => import('../components/AboutTestimonialSec'));
const AboutPrinciplesSec = lazy(() => import('../components/AboutPrinciplesSec'));
import '../assets/scss/about.scss';
import pageTitle from '../data/pagesTitles.json';
import Loader from '../components/Loader';
import par from '../data/heroData.json';

// import AboutDescrSec from "../components/AboutDescrSec";
// import AboutTestimonialSec from "../components/AboutTestimonialSec";
// import AboutPrinciplesSec from "../components/AboutPrinciplesSec";

function About(){
  const heroPar = par.about;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

        <title>{pageTitle.about}</title>
        <meta name="description" content="Discover Unixstudio innovative digital agency's expertise in strategic marketing, creative design, and cutting-edge technology. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Discover Unixstudio innovative digital agency's expertise in strategic marketing, creative design, and cutting-edge technology. " />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Unveiling Our Story: Crafting Digital Success | Unixstudio" />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
      </Helmet>
      <div className="about-grafic-bg" id="about-page">
          <HeroSec par={heroPar} />
          <Suspense fallback={<Loader />}>
            <AboutDescrSec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <AboutTestimonialSec />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <AboutPrinciplesSec />
          </Suspense>
      </div>
    </>
  )
}
export default About;