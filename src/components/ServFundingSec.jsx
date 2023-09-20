import { useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import fundingData from '../data/servFundingSecData.json'
const FaqList = lazy(() => import('./FaqList'));
import Loader from "../components/Loader";

function ServFundingSec() {
  const moveTo = useNavigate(); 

  const btnClick = () => {
    moveTo('/contacts');
  };

  return (
    <section id="funding">
      <div className="container">
        <h2 className="h2" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{fundingData.fundingTitle}</h2>
        <div className="wrap-funding">
          <div className="empty-col"></div>
          <div className="right-col">
            <div className="text-block">
              <p className="text-medium">{fundingData.fundingDescr}</p>
              <div className="services-subtitle">{fundingData.fundingSubtitle}</div>
            </div>
            <Suspense fallback={<Loader />}>
              <FaqList />
            </Suspense>
            <div className="text-block2">
              <p className="text-medium">{fundingData.fundingContinue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServFundingSec;