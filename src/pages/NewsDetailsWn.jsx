import { WN_API, WN_API_KEY } from "../env";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import formatDate from "../helpers/formatDate"
import LinkedinShare from "../components/svgComponents/LinkedinShare";
import PinterestShare from "../components/svgComponents/PinterestShare";
import '../assets/scss/news-details.scss'
import HeroSecNewsDet from "../components/HeroSecNewsDet";



function NewsDetailsWn(){
  const location = useLocation();
  const newsData = location.state.newsData;

  const [newsDetMock, setNewsDetMock] = useState([{}, {}]);

  useEffect(() => {
    fetch('../pubdata/newsDetMockedData.json')
      .then(resp => resp.json())
      .then(resp => {
        setNewsDetMock(resp);
      })
  }, [])

  const randomObjIndex = Math.floor(Math.random() * newsDetMock.length);
  const selectedAuthObj = newsDetMock[randomObjIndex];

  // async function fetchOneNews(){
  //   if(fetchCount.current !== 0){
  //     return false;
  //   }
  //   fetchCount.current++;

  //   const storageNews = localStorage.getItem(hash);
  //   if(storageNews !== null){
  //     setNewsData(JSON.parse(storageNews));
  //     setLoading(false);
  //     return false;
  //   }

  //   try {
  //     const url = atob(hash);
  //     const resp = await ky(`${WN_API}extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
  //     setNewsData(resp);
  //     localStorage.setItem(hash, JSON.stringify(resp));
  //     setLoading(false);
  //   } catch (err){
  //     console.log(err);
  //     toast.error("Some error occured");
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchOneNews();
  // }, []);

  // if(loading){
  //   return (<Loader />)
  // }

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
                <div>{news.author}</div>
                <div>{selectedAuthObj.authPosition}</div>
              </div>
            </div>
            <div className="date-news">{formatDate(newsData.publish_date)}</div>
          </div>
          <div className="detail-overview-wrap2">
            <div className="overview panchang">Overview</div>
            <p className="summary-text">{newsData.summary}</p>
          </div>
        </div>
      </div>

      <section id="detail-text-sec">
        <div className="container">
          <div className="detail-text-wrap">
            <div className="share-col">
              <div className="share-wrap">
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
              </div>
            </div>
            <div className="text-col">
              <p>{newsData.text}</p>
              <div className="poster-detail-wrap">
                <img src={newsData.image ? newsData.image : newsDefaultImg} alt={newsData.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default NewsDetailsWn;