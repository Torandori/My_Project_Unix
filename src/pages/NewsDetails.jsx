// import { lazy, Suspense } from 'react';
import { WN_API, WN_API_KEY } from "../env";
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
// const newsDefaultImg = lazy(() => import("../assets/images/newsDefault.jpg"));
// const HeroSecNewsDet = lazy(() => import("../components/HeroSecNewsDet"));
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import HeroSecNewsDet from "../components/HeroSecNewsDet";
import formatDate from "../helpers/formatDate"
import Loader from "../components/Loader";
import ky from "ky";
import { toast } from "react-toastify";
import '../assets/scss/news-details.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import { useLocation } from 'react-router-dom';
// import LinkedinShare from "../components/svgComponents/LinkedinShare";
// import PinterestShare from "../components/svgComponents/PinterestShare";


// const renderLoader = () => <p>Loading</p>;

function NewsDetails(){
  const { hash } = useParams();
  const [news, setNewsData] = useState({});
  const [loading, setLoading] = useState(true);
  const fetchCount = useRef(0);
  const [newsDetMock, setNewsDetMock] = useState([{}, {}]);

  useEffect(() => {
    try {
      fetch('./pubdata/newsDetMockedData.json')
        .then(resp => resp.json())
        .then(resp => {
          setNewsDetMock(resp);
        })
    } catch (error) {
      console.log(error)
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
    console.log('hash', hash);
    
    try {
      const url = atob(hash);
      const resp = await ky(`${WN_API}/extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
      setNewsData(resp);
      localStorage.setItem(hash, JSON.stringify(resp)); 
      setLoading(false);
    } catch (err){
      console.log(err);
      toast.error("Some error occured");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchOneNews();
  }, []);


  if(loading){
    return (<Loader />)
  }

  const renderLoader = () => <p>Loading</p>;

  return(
    // <Suspense fallback={renderLoader()}>
      <div id="news-details-page">
        <HeroSecNewsDet resp={news}/>
        <div id="detail-overview-sec">
          <div className="container">
            <div className="detail-overview-wrap1">
              <div className="author">
                <div className="pic-wrap">
                  <LazyLoadImage src={selectedAuthObj.authImg} alt={news.author} effect="blur" />
                  {/* <img src={selectedAuthObj.authImg} alt={news.author} /> */}
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
                  <LazyLoadImage src={news.image ? news.image : newsDefaultImg} alt="News picture" effect="blur" />
                  {/* <img src={news.image ? news.image : newsDefaultImg}  /> */}
                </div>
                <p>{news.text}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    // </Suspense>
  )
}
export default NewsDetails;
