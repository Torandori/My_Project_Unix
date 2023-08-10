import Arrow from "./svgComponents/Arrow";
import career from "../data/contCareerSecData.json"

function ContCareerSec() {
  return (
    <section id="project-career-sec">
      <div class="container">
        <div class="wrap-poject-career">
          <div class="wrap-buttons">
            {career.map((item, index) => {
              return (
              <button type="button" class={item.careerClass} key={index}>
                <span class="btn-content">
                  <span class="arrow-in">
                    <Arrow />
                  </span>
                  <span class="btn-text">{item.careerText}</span>
                </span>
              </button>
              )
            })}

          </div>
          <div class="location">
            <div class="where panchang">in new york, usa</div>
            <div class="descr">our location</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContCareerSec;