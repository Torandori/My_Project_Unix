import { WN_API, WN_API_KEY } from "../env";
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import HeroSecNewsDet from "../components/HeroSecNewsDet";
import formatDate from "../helpers/formatDate"
import ky from "ky";
import { toast } from "react-toastify";
import '../assets/scss/news-details.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import pageTitle from '../data/pagesTitles.json';
import { Helmet } from "react-helmet-async";
import Loader from "../components/Loader";

function NewsDetailsFetch(){
  const { hash } = useParams();
  console.log('hashNewsDet', hash);
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
      console.log('err', error)
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
      const resp = await ky(`${WN_API}/extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
      setNewsData(resp);
      localStorage.setItem(hash, JSON.stringify(resp)); 
      setLoading(false);
    } catch (err){
      console.log('err', err);
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

  return(
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

        <title>{pageTitle.news}</title>
        <meta name="description" content="Industry trends, expert opinions, and noteworthy achievements. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Industry trends, expert opinions, and noteworthy achievements." />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Industry trends, expert opinions, and noteworthy achievements." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
      </Helmet>
      <div id="news-details-page">
        <HeroSecNewsDet resp={news}/>
        <div id="detail-overview-sec">
          <div className="container">
            <div className="detail-overview-wrap1" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
              <div className="author">
                <div className="pic-wrap">
                  <LazyLoadImage src={selectedAuthObj.authImg} alt={news.author} effect="blur" />
                </div>
                <div className="text">
                  <div>{news.author}</div>
                  <div>{selectedAuthObj.authPosition}</div>
                </div>
              </div>
              <div className="overview panchang">Overview</div>
              <div className="date-news">{formatDate(news.publish_date)}</div>
            </div>
          </div>
        </div>

        <section id="detail-text-sec">
          <div className="container">
            <div className="detail-text-wrap">
              <div className="text-col">
                <div className="poster-detail-wrap" data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="500">
                  <LazyLoadImage src={news.image ? news.image : newsDefaultImg} alt="News picture" effect="blur" />
                </div>
                <p>{news.text}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default NewsDetailsFetch;
