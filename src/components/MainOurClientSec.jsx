import clientData from '../data/mainOurClient.json'
import SliderClient from './SliderClient';

function MainOurClientSec() {

  return (
    <section id="our-client">
      <div className="container">
        <SliderClient />
        {/* <div className="flex-clients separator">
          <div className="client-wrap">
            <h3 className="h3">{clientData.clientTitleStart}</h3>
            <div className="h3">{clientData.clientTitleEnd}</div>
          </div>
          <div className="small-text">
            <p>{clientData.clientSmallTextStart}</p>
            <p>{clientData.clientSmallTextEnd}</p>
          </div>
          <div className="arrows">
            <div className="arrow-btn">
              <Arrow />
            </div>
            <div className="arrow-btn">
              <Arrow />
            </div>
          </div>
        </div>
        <div className="flex-slider-sec">
          <div className="empty"></div>
          <div className="slider">
            <SliderClient />
          </div>
        </div> */}
      </div>
    </section>
  )
}
export default MainOurClientSec;