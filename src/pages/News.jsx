// import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
// import { useState, useEffect, useRef } from "react";
// import NewsItem from "../components/NewsItem";
// import ky from "ky";
// import { toast } from "react-toastify";
import { useEffect } from "react";
import HeroSec from "../components/HeroSec";
import NewsSliderSec from "../components/NewsSliderSec";
import NewsBestSec from "../components/NewsBestSec";
import "../assets/scss/news.scss"
import par from '../data/heroData.json';


function News(){
  
  useEffect(()=>{
    window.document.title = 'Unix News';
  }, []);
  const heroPar = par.news;

  return (
    <div id="news-page">
      <HeroSec par={heroPar} />
      <NewsSliderSec />
      {/* <NewsBestSliderSec /> */}
    </div>
  )
}

export default News;
