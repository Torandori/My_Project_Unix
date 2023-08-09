import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HeroSec from "../components/HeroSec";
import ServDetDescrSec from "../components/ServDetDescrSec";
import ServDetHowSec from "../components/ServDetHowSec";
import "../assets/scss/serviceDetails.scss"

function ServiceDetails() {
  const [descr, setDescr] = useState({ howSec: {howList: []}})
  const { slug } = useParams()

  useEffect(() => {
    console.log(slug);
    fetch(`/pubdata/${slug}.json`)
      .then(resp => resp.json())
      .then(resp => 
        setDescr(resp)
      )
  }, [])

  return (
    <div id="service-details-page" className="service-details-body-bg">
      <div className="service-details-grafic-bg" >
        <HeroSec />
        <ServDetDescrSec descr={descr} />
        <ServDetHowSec descr={descr} />
      </div>
    </div>
  )
}
export default ServiceDetails;