// import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeroServDet from '../components/HeroServDet';
// const ServDetDescrSec = lazy(() => import("../components/ServDetDescrSec"));
// const ServDetHowSec = lazy(() => import("../components/ServDetHowSec"));
import ServDetDescrSec from "../components/ServDetDescrSec";
import ServDetHowSec from "../components/ServDetHowSec";
import "../assets/scss/serviceDetails.scss"

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

  useEffect(()=>{
    window.document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div id="service-details-page" className="service-details-body-bg">
      <div className="service-details-grafic-bg" >
      {/* <Suspense fallback={renderLoader()}> */}
        <HeroServDet descr={descr} />
        <ServDetDescrSec descr={descr} />
        <ServDetHowSec descr={descr} />
      {/* </Suspense> */}
      </div>
    </div>
  )
}
export default ServiceDetails;