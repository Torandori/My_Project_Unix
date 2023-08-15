import witnessData from "../data/mainWitnessSecData.json"
import SliderWitness from "./SliderWitness";

function MainWitnessSec() {
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