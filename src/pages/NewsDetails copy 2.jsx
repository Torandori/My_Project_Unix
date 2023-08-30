import { WN_API, WN_API_KEY } from "../env";
import { useParams } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import newsDefaultImg from '../assets/images/newsDefault.jpg';
// import Loader from "../components/Loader";
import ky from "ky";
import '../assets/scss/news-details.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



function NewsDetails(){
  const { hash } = useParams();
  const [news, setNewsData] = useState({});
  const fetchCount = useRef(0);

  async function fetchOneNews(){
    if(fetchCount.current !== 0){
      return false;
    }
    fetchCount.current++;

    const storageNews = localStorage.getItem(hash);
    if(storageNews !== null){
      setNewsData(JSON.parse(storageNews));
      return false;
    }
    
    try {
      const url = atob(hash);
      const resp = await ky(`${WN_API}extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
      setNewsData(resp);
      localStorage.setItem(hash, JSON.stringify(resp)); 
    } catch (err){
      console.log(err);
      toast.error("error");
    }
  }

  useEffect(() => {
    fetchOneNews();
  }, []);



  return(
    <div id="news-details-page">
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
  )
}
export default NewsDetails;
