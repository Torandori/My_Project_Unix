import Arrow from './svgComponents/Arrow'
import quote from '../assets/images/quote.svg'
import avatar from '../assets/images/peter_img.jpg'
import clientData from '../data/MainOurClient.json'

function MainOurClientSec() {
  const _clientData = clientData[0];

  return (
    <section id="our-client">
      <div className="container">
        <div className="flex-clients separator">
          <div className="client-wrap">
            <h3 className="h3">{_clientData.clientTitleStart}</h3>
            <div className="h3">{_clientData.clientTitleEnd}</div>
          </div>
          <div className="small-text">
            <p>{_clientData.clientSmallTextStart}</p>
            <p>{_clientData.clientSmallTextEnd}</p>
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
            <div className="client-slider">
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
                <img src={avatar} alt="Picture of Peter Visser" />
              </div>
              <div className="text">
                <div className="panchang">{_clientData.clientName}</div>
                <div>{_clientData.clientPosition}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default MainOurClientSec;