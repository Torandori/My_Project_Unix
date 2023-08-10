import news from '../data/newsSliderSecData.json'

function NewsSliderSec() {

  return (
    <section id="slider-news-sec">
      <div className="container">
        {api.map((item, index) => {
          return (
            <div className="news-slider-item" key={index}>
              <div className="content-wrap">
                <div className="author">
                  <div className="pic-wrap">
                    <img src="assets/images/peter_img.jpg" alt="Picture of Peter Visser" />
                  </div>
                  <div className="text">
                    <div>Peter Visser</div>
                    <div>Head of Project Management</div>
                  </div>
                </div>
                <h2 className="panchang topic">Unix Studio got 2 CSS Design Awards</h2>
                <div className="prev-next-arrows">
                  <div className="prev">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.3" width="60" height="60" rx="30" transform="matrix(-1 0 0 1 60 0)" fill="#F5F5F5"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3497 29.183L30.2997 21.07L29.2857 20L19.5537 29.933L29.2857 39.866L30.2997 38.797L22.3497 30.683L38.9997 30.683L38.9997 29.183L22.3497 29.183Z" fill="#121212"/>
                      </svg>
                  </div>
                  <div className="next">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect opacity="0.3" width="60" height="60" rx="30" fill="#F5F5F5"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M37.6503 29.183L29.7003 21.07L30.7143 20L40.4463 29.933L30.7143 39.866L29.7003 38.797L37.6503 30.683L21.0003 30.683L21.0003 29.183L37.6503 29.183Z" fill="#121212"/>
                      </svg>
                  </div>
                </div>

              </div>
              <div className="content-wrap2">
                <div className="new panchang">{news.newsSliderNum}</div>
                <div className="date-news">October 3, 2022</div>
              </div>

              <div className="img-wrap">
                <img src="assets/images/slider-new-pic1.jpg" alt="Picture of new 1" />
              </div>

              <ul className="news-list">
                <li>
                  <div className="news-list-item">
                    <div className="author">
                      <div className="pic-wrap">
                        <img src="assets/images/news-card1.jpg" alt="Picture of Cynthia Houle" />
                      </div>
                      <div className="text">
                        <div>cynthia houle</div>
                        <div>Head of Project Management</div>
                      </div>
                    </div>
                    <a href="newsDetails.html" className="new-topic" title="Go to news details">Web3 website redesign: 2x increase in website traffic</a>
                    <div className="date-news">October 3,2022</div>
                    <div className="poster-wrap">
                      <img src="assets/images/new-poster1.jpg" alt="Poster of new 1" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="news-list-item">
                    <div className="author">
                      <div className="pic-wrap">
                        <img src="assets/images/news-card2.jpg" alt="Picture of Rita Paul" />
                      </div>
                      <div className="text">
                        <div>rita poul</div>
                        <div>Head of Project Management</div>
                      </div>
                    </div>
                    <a href="newsDetails.html" className="new-topic" title="Go to news details">How to structure data on NFT dashboards?</a>
                    <div className="date-news">October 3,2022</div>
                    <div className="poster-wrap">
                      <img src="assets/images/new-poster2.jpg" alt="Poster of new 1" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="news-list-item">
                    <div className="author">
                      <div className="pic-wrap">
                        <img src="assets/images/news-card3.jpg" alt="Picture of Rita Paul" />
                      </div>
                      <div className="text">
                        <div>victor trivett</div>
                        <div>Head of Project Management</div>
                      </div>
                    </div>
                    <a href="newsDetails.html" className="new-topic" title="Go to news details">How to make a pitch deck that wins investors</a>
                    <div className="date-news">October 3,2022</div>
                    <div className="poster-wrap">
                      <img src="assets/images/new-poster3.jpg" alt="Poster of new 1" />
                    </div>
                  </div>
                </li>
              </ul>

            </div>
          )
        })}

      </div>
    </section>

  )
}
export default NewsSliderSec;