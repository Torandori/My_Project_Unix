import btnCircle from '../assets/images/svg/btnCircle.svg'
import Flake from './svgComponents/Flake'
// import '../assets/scss/about.scss'
import '../assets/scss/news-details.scss'
import heroNewsData from "../data/heroData.json"


function HeroSecNewsDet(props){
  const heroD = heroNewsData.newsDet;
  const newsResp = props.propNews
  console.log(newsResp);
  
  return (
  <section id="hero-sec">
    <div className="container separator">
      <h1 className="panchang">{newsResp.title}</h1>
      <div className="flake dark">
        <Flake />
      </div>
      <p>{heroD.heroDescr}</p>
      <button type="button" className="btn btn-circle">
        <img src={btnCircle} alt="Contact us" />
      </button>
    </div>
  </section>
  )
}

export default HeroSecNewsDet;


// return (
//   <section id="hero-sec">
//     <div className="container separator">
//       <h1 className="panchang">{heroD.heroTitle}</h1>
//       <div className="flake dark">
//         <Flake />
//       </div>
//       <p>{heroD.heroDescr}</p>
//       <button type="button" className="btn btn-circle">
//         <img src={btnCircle} alt="Contact us" />
//       </button>
//     </div>
//   </section>
// )