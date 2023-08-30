import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeroServDet from '../components/HeroServDet';
import ServDetDescrSec from "../components/ServDetDescrSec";
import ServDetHowSec from "../components/ServDetHowSec";
import "../assets/scss/serviceDetails.scss";
import { Helmet } from 'react-helmet-async';
// import pageTitle from '../data/pagesTitles.json';
// import { lazy, Suspense } from 'react';
// const ServDetDescrSec = lazy(() => import("../components/ServDetDescrSec"));
// const ServDetHowSec = lazy(() => import("../components/ServDetHowSec"));

// const renderLoader = () => <p>Loading</p>;


function ServiceDetails() {
  const [descr, setDescr] = useState({ howSec: {howList: []}, heroServ: {}})
  const { slug } = useParams();
  
  useEffect(() => {
    // console.log(slug);
    fetch(`/My_Project_Unix/pubdata/${slug}.json`)
    .then(resp => resp.json())
    .then(resp => 
      setDescr(resp)
      )
    }, [slug])
  
  const pageTitle = descr.servPageTitle;

  // useEffect(()=>{
  //   window.document.title = pageTitle;
  // }, [pageTitle]);

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

        <title>{`Unix ` + pageTitle}</title>
        <meta name="description" content="Comprehensive range of digital solutions emphasizes the variety of services your agency provides. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Comprehensive range of digital solutions emphasizes the variety of services your agency provides." />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Comprehensive range of digital solutions emphasizes the variety of services your agency provides." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        {/* <meta name="description" content="This is the meta description for this specific page." /> */}
      </Helmet>
      <div id="service-details-page" className="service-details-body-bg">
        <div className="service-details-grafic-bg" >
        {/* <Suspense fallback={renderLoader()}> */}
          <HeroServDet descr={descr} />
          <ServDetDescrSec descr={descr} />
          <ServDetHowSec descr={descr} />
        {/* </Suspense> */}
        </div>
      </div>
    </>
  )
}
export default ServiceDetails;