import { useState, useEffect } from "react";
import witnessData from "../data/mainWitnessSecData.json"
import SliderWitness from "./SliderWitness";

function MainWitnessSec() {

  // const [sliderItems, setSliderItems] = useState([]);

  // useEffect(() => {
  //   fetch('./pubdata/mainWitSliderItems.json')
  //   .then(resp => resp.json())
  //   .then(resp => {
  //     setSliderItems(resp);
  //   })
  // }, []);

  return (
    <section id="witness-sec">
    <div className="container">
      <h2 className="h2">{witnessData.mainWitnessTitle}</h2>
      <div className="subtext">{witnessData.mainWitnessSubtext}</div>
    </div>
    <div className="witness-slider">
      <SliderWitness />
    </div>
  </section>
  )
}

export default MainWitnessSec;

        {/* <ul>
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
        </ul> */}