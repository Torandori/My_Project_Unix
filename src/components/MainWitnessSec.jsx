import { lazy, Suspense } from 'react';
import witnessData from "../data/mainWitnessSecData.json"
const SliderWitness = lazy(() => import('./SliderWitness'));
import Loader from "../components/Loader";

function MainWitnessSec() {
  return (
    <section id="witness-sec">
    <div className="container">
      <h2 className="h2" data-aos="zoom-in-right" data-aos-easing="ease-out-quart" data-aos-duration="200">{witnessData.mainWitnessTitle}</h2>
      <div className="subtext" data-aos="zoom-in-right" data-aos-easing="ease-out-quart" data-aos-duration="500" data-aos-delay="100">{witnessData.mainWitnessSubtext}</div>
    </div>
    <ul className="witness-slider" data-aos="slide-right" data-aos-easing="ease-out-cubic" data-aos-duration="400" data-aos-delay="100">
    <Suspense fallback={<Loader />}>
      <SliderWitness />
    </Suspense>
    </ul>
  </section>
  )
}

export default MainWitnessSec;