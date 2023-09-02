function ServDetDescrSec({descr}) {

  return (
    <>
      <div id="service-descr-sec">
        <div className="container">
          <div className="wrap-service-details">
            <div className="empty-col"></div>
            <div className="right-col">
              <div className="number-text-block" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="500">
                <div className="number">{descr.servDetNumber}</div>
                <p className="text">{descr.servDetText}</p>
              </div>
              <p className="text" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="250">{descr.servDetDescrContinue}</p>
              <p className="text" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300">{descr.sentenceStart}<b>{descr.boldtext}</b>{descr.sentenceEnd}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ServDetDescrSec;