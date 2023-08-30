import { WN_API, WN_API_KEY } from "../env";
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import formatDate from "../helpers/formatDate"
import Loader from "../components/Loader";
import ky from "ky";
// import { useLocation } from 'react-router-dom';
// import { Toast } from "react-toastify/dist/components";
// import LinkedinShare from "../components/svgComponents/LinkedinShare";
// import PinterestShare from "../components/svgComponents/PinterestShare";
import '../assets/scss/news-details.scss'
import HeroSecNewsDet from "../components/HeroSecNewsDet";




function NewsDetails(){
  // const location = useLocation();
  // const newsData = location.state?.newsData || {};
  // console.log(newsData)
  const { hash } = useParams();
  const [news, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchCount = useRef(0);
  const [newsDetMock, setNewsDetMock] = useState([{}, {}]);
  // console.log("hashdet", hash)

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


  async function fetchOneNews(){
    if(fetchCount.current !== 0){
      return false;
    }
    fetchCount.current++;

    const storageNews = localStorage.getItem(hash);
    if(storageNews !== null){
      setNewsData(JSON.parse(storageNews));
      setLoading(false);
      return false;
    }
    
    try {
      const url = atob(hash);
      const resp = await ky(`${WN_API}extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
      setNewsData(resp);
      localStorage.setItem(hash, JSON.stringify(resp)); 
      setLoading(false);
    } catch (err){
      console.log(err);
      // toast.error("test");
      setLoading(false);
    }
  }
  // console.log('news2', news);

  useEffect(() => {
    fetchOneNews();
  }, []);
  // console.log(news)


  if(loading){
    return (<Loader />)
  }


  return(
    <div id="news-details-page">
      <HeroSecNewsDet resp={news}/>
      <div id="detail-overview-sec">
        <div className="container">
          <div className="detail-overview-wrap1">
            <div className="author">
              <div className="pic-wrap">
                <img src={selectedAuthObj.authImg} alt={news.author} />
              </div>
              <div className="text">
                <div>{news.author}</div>
                <div>{selectedAuthObj.authPosition}</div>
              </div>
            </div>
            <div className="overview panchang">Overview</div>
            <div className="date-news">{formatDate(news.publish_date)}</div>
          </div>
          {/* <div className="detail-overview-wrap2">
            <div className="overview panchang">Overview</div>
            <p className="summary-text">{news.summary}</p>
          </div> */}
        </div>
      </div>

      <section id="detail-text-sec">
        <div className="container">
          <div className="detail-text-wrap">
            <div className="text-col">
              <div className="poster-detail-wrap">
                <img src={news.image ? news.image : newsDefaultImg}  />
              </div>
              <p>{news.text}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default NewsDetails;
