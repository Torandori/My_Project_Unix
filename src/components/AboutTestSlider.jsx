import testData from '../data/aboutTestimonial.json'

function AboutTestSlider() {
  return (
    <div className="slider-team">
      {testData.aboutTestSlider.map((item, index) => {
        return (
          <div className="slider-member" key={index}>
            <div className="img-wrap">
              <img src={item.sliderMemberImg} alt={item.sliderImgAlt} className="change-position" />
            </div>
            <div className="under-pic">{item.sliderMemberName}</div>
          </div>
        )
      })}
    </div>
  )
}
export default AboutTestSlider;