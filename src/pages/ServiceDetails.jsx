import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeroServDet from '../components/HeroServDet';
import ServDetDescrSec from "../components/ServDetDescrSec";
import ServDetHowSec from "../components/ServDetHowSec";
import "../assets/scss/serviceDetails.scss"

function ServiceDetails() {
  const [descr, setDescr] = useState({ howSec: {howList: []}, heroServ: {}})
  const { slug } = useParams();
  
  useEffect(() => {
    // console.log(slug);
    fetch(`/pubdata/${slug}.json`)
    .then(resp => resp.json())
    .then(resp => 
      setDescr(resp)
      )
    }, [])
  
  const pageTitle = descr.servPageTitle;

  useEffect(()=>{
    window.document.title = pageTitle;
  }, [pageTitle]);

  return (
    <div id="service-details-page" className="service-details-body-bg">
      <div className="service-details-grafic-bg" >
        <HeroServDet descr={descr} />
        <ServDetDescrSec descr={descr} />
        <ServDetHowSec descr={descr} />
      </div>
    </div>
  )
}
export default ServiceDetails;