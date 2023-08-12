import { Link, useParams } from "react-router-dom";
import { WN_API, WN_API_KEY } from "../env";
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
// import Loader from "../components/Loader";
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import formatDate from "../helpers/formatDate"
import LinkedinShare from "./svgComponents/LinkedinShare";
import PinterestShare from "./svgComponents/PinterestShare";
import '../assets/scss/news-details.scss'
import HeroSecNewsDet from "./HeroSecNewsDet";


function NewsDetails(){
  const {hash} = useParams();
  const [news, setNewsData] = useState({});
  // const [loading, setLoading] = useState(true);
  const fetchCount = useRef(0);

  async function fetchOneNews(){
    if(fetchCount.current !== 0){
      return false;
    }
    fetchCount.current++;

    const storageNews = localStorage.getItem(hash);
    if(storageNews !== null){
      setNewsData(JSON.parse(storageNews));
      // setLoading(false);
      return false;
    }

    try {
      const url = atob(hash);
      const resp = await ky(`${WN_API}extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
      setNewsData(resp);
      localStorage.setItem(hash, JSON.stringify(resp));
      // setLoading(false);
    } catch (err){
      console.log(err);
      toast.error("Some error occured");
      // setLoading(false);
    }
  }

  useEffect(() => {
    fetchOneNews();
  }, []);

  // if(loading){
  //   return (<Loader />)
  // }

  return(
    <div id="news-details-page">
      <HeroSecNewsDet propNews={news} />
      <div id="detail-overview-sec">
        <div className="container">
          <div className="detail-overview-wrap1">
            <div className="author">
              <div className="pic-wrap">
                <img src="assets/images/peter_img.jpg" alt="Picture of Peter Visser" />
              </div>
              <div className="text">
                <div>{news.author}</div>
                <div>Head of Project Management</div>
              </div>
            </div>
            <div className="date-news">{formatDate(news.publish_date)}</div>
          </div>
          <div className="detail-overview-wrap2">
            <div className="overview panchang">Overview</div>
            <p className="summary-text">{news.summary}</p>
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
              <p>{news.text}</p>
              <div className="poster-detail-wrap">
                <img src={news.image ? news.image : newsDefaultImg} alt={news.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default NewsDetails;
