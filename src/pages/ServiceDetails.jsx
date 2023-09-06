import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeroServDet from '../components/HeroServDet';
// import ServDetDescrSec from "../components/ServDetDescrSec";
// import ServDetHowSec from "../components/ServDetHowSec";
import "../assets/scss/serviceDetails.scss";
import { Helmet } from 'react-helmet-async';
import loadable from '@loadable/component';
const ServDetDescrSec = loadable(() => import('../components/ServDetDescrSec'));
const ServDetHowSec = loadable(() => import('../components/ServDetHowSec'));


function ServiceDetails() {
  const [descr, setDescr] = useState({ howSec: {howList: []}, heroServ: {}})
  const { slug } = useParams();
  
  useEffect(() => {
    fetch(`/My_Project_Unix/pubdata/${slug}.json`)
    .then(resp => resp.json())
    .then(resp => 
      setDescr(resp)
      )
    }, [slug])
  
  const pageTitle = descr.servPageTitle;

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
      </Helmet>
      <div id="service-details-page" className="service-details-body-bg">
        <div className="service-details-grafic-bg" >
          <HeroServDet descr={descr} />
          <ServDetDescrSec descr={descr} />
          <ServDetHowSec descr={descr} />
          {/* <Suspense fallback={<Loader />}>
            <ServDetDescrSec descr={descr} />
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ServDetHowSec descr={descr} />
          </Suspense> */}
        </div>
      </div>
    </>
  )
}
export default ServiceDetails;