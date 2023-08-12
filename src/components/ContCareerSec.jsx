import Arrow from "./svgComponents/Arrow";
import career from "../data/contCareerSecData.json"

function ContCareerSec() {
  return (
    <section id="project-career-sec">
      <div className="container">
        <div className="wrap-poject-career">
          <div className="wrap-buttons">
            {career.map((item, index) => {
              return (
              <button type="button" className={item.careerClass} key={index}>
                <span className="btn-content">
                  <span className="arrow-in">
                    <Arrow />
                  </span>
                  <span className="btn-text">{item.careerText}</span>
                </span>
              </button>
              )
            })}

          </div>
          <div className="location">
            <div className="where panchang">in new york, usa</div>
            <div className="descr">our location</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContCareerSec;