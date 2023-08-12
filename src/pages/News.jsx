// import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
// import { useState, useEffect, useRef } from "react";
// import NewsItem from "../components/NewsItem";
// import ky from "ky";
// import { toast } from "react-toastify";
import HeroSec from "../components/HeroSec";
import NewsSliderSec from "../components/NewsSliderSec";
import NewsBestSec from "../components/NewsBestSec";
import "../assets/scss/news.scss"
import par from '../data/heroData.json';


function News(){
  // const [news, setNews] = useState([]);
  // const fetchCount = useRef(0);

  // async function fetchNews(){
  //   if(fetchCount.current !== 0)
  //     return false;

  //   fetchCount.current++;
  //   const storageNews = localStorage.getItem('newsList');
  //   const lastUpdate = +localStorage.getItem('LastNewsUpdate');
  //   if(storageNews !== null){
  //     const now = new Date().getTime();
  //     if((now - lastUpdate) < NEWS_CACHE_TIME) {
  //       setNews(JSON.parse(storageNews));
  //       return false;
  //     } 
  //   }
  
  //   try {
  //     const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=12`).json();
  //     setNews(resp.news);
  //     localStorage.setItem('newsList', JSON.stringify(resp.news));
  //     localStorage.setItem('lastNewsUpdate', new Date().getTime());
  //   } catch (err){
  //     console.log(err);
  //     toast.error("test");
  //   }

    
  // }

  // useEffect(() => {
  //   fetchNews();
  // }, []);
  const heroPar = par.news;

  return (
    <div id="news-page">
      <HeroSec par={heroPar} />
      {/* <NewsSliderSec /> */}
      {/* <NewsBestSliderSec /> */}
    </div>
  )
}

export default News;
