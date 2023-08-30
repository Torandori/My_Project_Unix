import { useEffect } from "react";
import { lazy, Suspense } from 'react';
import HeroSec from "../components/HeroSec";
import AboutDescrSec from "../components/AboutDescrSec";
import AboutTestimonialSec from "../components/AboutTestimonialSec";
import AboutPrinciplesSec from "../components/AboutPrinciplesSec";
import par from '../data/heroData.json';
import '../assets/scss/about.scss';
import { Helmet } from 'react-helmet-async';
import pageTitle from '../data/pagesTitles.json';


// const AboutDescrSec = lazy(() => import("../components/AboutDescrSec"));
// const AboutTestimonialSec = lazy(() => import("../components/AboutTestimonialSec"));
// const AboutPrinciplesSec = lazy(() => import("../components/AboutPrinciplesSec"));

// const renderLoader = () => <p>Loading</p>;


function About(){
  const heroPar = par.about;


  // useEffect(()=>{
  //   window.document.title = 'Unix About';
  // }, []);

  return (
    <>
      <Helmet>
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
        {/* <meta name="description" content="This is the meta description for this specific page." /> */}
      </Helmet>
      <div className="about-grafic-bg" id="about-page">
        {/* <Suspense fallback={renderLoader()}> */}
          <HeroSec par={heroPar} />
          <AboutDescrSec />
          <AboutTestimonialSec />
          <AboutPrinciplesSec />
        {/* </Suspense> */}
      </div>
    </>
  )
}
export default About;