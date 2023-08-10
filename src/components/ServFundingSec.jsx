import fundingData from '../data/servFundingSecData.json'
import circleArrowBtn from '../assets/images/svg/circleArrowBtn.svg'

function ServFundingSec() {
  const fundingList = fundingData.fundingList;

  return (
    <section id="funding">
      <div className="container">
        <h2 className="h2">{fundingData.fundingTitle}</h2>
        <div className="wrap-funding">
          <div className="empty-col"></div>
          <div className="right-col">
            <div className="text-block">
              <p className="text-medium">{fundingData.fundingDescr}</p>
              <div className="services-subtitle">{fundingData.fundingSubtitle}</div>
            </div>
            <div className="name-block">
              {fundingList.map((item, index) => {
                return (
                  <div className="wrap-number-text" key={index}>
                    <div className="number">{item.fundingNumber}</div>
                    <div className="text">{item.fundingText}</div> 
                  </div>
                )
              })}
            </div>
            <div className="text-block2">
              <p className="text-medium">{fundingData.fundingContinue}</p>
              <div className="circle-arrow-btn">
                <img src={circleArrowBtn} alt="Contact us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServFundingSec;