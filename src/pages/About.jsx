import { useEffect } from "react";
import { lazy, Suspense } from 'react';
import HeroSec from "../components/HeroSec";
// const AboutDescrSec = lazy(() => import("../components/AboutDescrSec"));
// const AboutTestimonialSec = lazy(() => import("../components/AboutTestimonialSec"));
// const AboutPrinciplesSec = lazy(() => import("../components/AboutPrinciplesSec"));
import AboutDescrSec from "../components/AboutDescrSec";
import AboutTestimonialSec from "../components/AboutTestimonialSec";
import AboutPrinciplesSec from "../components/AboutPrinciplesSec";
import par from '../data/heroData.json';
import '../assets/scss/about.scss';

// const renderLoader = () => <p>Loading</p>;

function About(){
  const heroPar = par.about;

  useEffect(()=>{
    window.document.title = 'Unix About';
  }, []);

  return (
    <div className="about-grafic-bg" id="about-page">
      {/* <Suspense fallback={renderLoader()}> */}
        <HeroSec par={heroPar} />
        <AboutDescrSec />
        <AboutTestimonialSec />
        <AboutPrinciplesSec />
      {/* </Suspense> */}
    </div>
  )
}
export default About;