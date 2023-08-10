import news from '../data/newsSliderSecData.json'

function NewsBestSec() {
  return (
    <section id="best-sec">
      <div className="container">
        <h3 className="h3">{news.newsBest}</h3>
        <ul className="best-news-list">
          {api.map((item, index) => {
            return (
              <li key={index}>
                <div className="author">
                  <div className="pic-wrap">
                    <img src="assets/images/peter_img.jpg" alt="Picture of Peter Visser" />
                  </div>
                  <div className="text">
                    <div>Peter Visser</div>
                    <div>Visser Consulting</div>
                  </div>
                </div>
                <Link to="newsDetails.html" className="new-topic" title="Go to news details">16 witty tips to get six-figure clients on Dribbble</Link>
                <div className="date-news">October 3,2022</div>
              </li>
            )
          })}
        </ul>

        <ul className="news-list">
          {api.map((item, index) => {
            return (
              <li key={index} >
                <div className="news-list-item">
                  <div className="author">
                    <div className="pic-wrap">
                      <img src="assets/images/best-avatar1.jpg" alt="Picture of Cynthia Houle" />
                    </div>
                    <div className="text">
                      <div>Malcolm Barlow</div>
                      <div>Head of UX</div>
                    </div>
                  </div>
                  <Link to="newsDetails.html" className="new-topic" title="Go to news details">What if: risks you can face when skipping UX research</Link>
                  <div className="date-news">October 3,2022</div>
                  <div className="poster-wrap">
                    <img src="assets/images/best-poster1.jpg" alt="Poster of new 1" />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default NewsBestSec;