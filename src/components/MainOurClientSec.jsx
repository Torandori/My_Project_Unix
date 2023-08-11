import Arrow from './svgComponents/Arrow'
// import quote from '../assets/images/quote.svg'
import clientData from '../data/mainOurClient.json'
import SliderClient from './SliderClient';

function MainOurClientSec() {

  return (
    <section id="our-client">
      <div className="container">
        <div className="flex-clients separator">
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
            {/* <div className="client-slider">
              <div className="quote">
                <img src={quote} alt="Quote picture" />
              </div>
              <ul>
                <li>
                  <p>I have been hiring people in this space for a number of years.</p>
                  <p>and I have never seen this level of <br /> professionalism. It really feels like you are working with a team that can get the job done.</p>
                </li>
              </ul>
            </div>
            <div className="gen-slider-descr">
              <div className="pic-wrap">
                <img src={clientData.clientAvatarUrl} alt="Picture of Peter Visser" />
              </div>
              <div className="text">
                <div className="panchang">{clientData.clientName}</div>
                <div>{clientData.clientPosition}</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
export default MainOurClientSec;