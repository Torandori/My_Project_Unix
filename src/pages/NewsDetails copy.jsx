import { WN_API, WN_API_KEY } from "../env";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import formatDate from "../helpers/formatDate"
// import LinkedinShare from "../components/svgComponents/LinkedinShare";
// import PinterestShare from "../components/svgComponents/PinterestShare";
import '../assets/scss/news-details.scss'
import HeroSecNewsDet from "../components/HeroSecNewsDet";



function NewsDetails(){
  const location = useLocation();
  const newsData = location.state?.newsData || {};
  console.log(newsData)


  const [newsDetMock, setNewsDetMock] = useState([{}, {}]);

  useEffect(() => {
    try {
      fetch('./pubdata/newsDetMockedData.json')
        .then(resp => resp.json())
        .then(resp => {
          setNewsDetMock(resp);
        })
    } catch (error) {
      console.log(error);
    }
  }, [])

  const randomObjIndex = Math.floor(Math.random() * newsDetMock.length);
  const selectedAuthObj = newsDetMock[randomObjIndex];

  return(
    <div id="news-details-page">
      <HeroSecNewsDet propNews={newsData} />
      <div id="detail-overview-sec">
        <div className="container">
          <div className="detail-overview-wrap1">
            <div className="author">
              <div className="pic-wrap">
                <img src={selectedAuthObj.authImg} alt={newsData.author} />
              </div>
              <div className="text">
                <div>{newsData.author}</div>
                <div>{selectedAuthObj.authPosition}</div>
              </div>
            </div>
            <div className="overview panchang">Overview</div>
            <div className="date-news">{formatDate(newsData.publish_date)}</div>
          </div>
          {/* <div className="detail-overview-wrap2">
            <div className="overview panchang">Overview</div>
            <p className="summary-text">{newsData.summary}</p>
          </div> */}
        </div>
      </div>

      <section id="detail-text-sec">
        <div className="container">
          <div className="detail-text-wrap">
            {/* <div className="share-col"> */}
              {/* <div className="share-wrap">
                <div>Share:</div>
                <ul className="share-links">
                  <li>
                    <Link to="https://www.linkedin.com/" title="Go to Linkedin" target="_blank" rel="noreferrer nofollow">
                      <LinkedinShare />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.pinterest.com/" title="Got to Pinterest" target="_blank" rel="noreferrer nofollow">
                      <PinterestShare />
                    </Link>
                  </li>
                </ul>
              </div> */}
            {/* </div> */}
            <div className="text-col">
              <div className="poster-detail-wrap">
                <img src={newsData.image ? newsData.image : newsDefaultImg} alt={newsData.title} />
              </div>
              <p>{newsData.text}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default NewsDetails;
