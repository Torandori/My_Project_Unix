import { useState, useEffect } from "react";
import witnessData from "../data/mainWitnessSecData.json"

function MainWitnessSec() {

  const [sliderItems, setSliderItems] = useState([]);

  useEffect(() => {
    fetch('./pubdata/mainWitSliderItems.json')
    .then(resp => resp.json())
    .then(resp => {
      setSliderItems(resp);
    })
  }, []);

  return (
    <section id="witness-sec">
    <div className="container">
      <h2 className="h2">{witnessData.mainWitnessTitle}</h2>
      <div className="subtext">{witnessData.mainWitnessSubtext}</div>
      <div className="witness-slider">
        <ul>
          {sliderItems.map((item, index) => {
              return (
                <li key={index}>
                  <div className="slider-img-wrap">
                    <img src={item.witSliderImgUrl} alt={item.witSliderImgAlt} />
                  </div>
                  <div className="slider-descr">
                    <div className="panchang">{item.witSliderItemTitle}</div>
                    <div>{item.witSliderItemService}</div>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  </section>
  )
}

export default MainWitnessSec;