// import { lazy, Suspense } from 'react';
import { useEffect } from "react";
import HeroSec from "../components/HeroSec";
// const NewsSliderSec = lazy(() => import("../components/NewsSliderSec"));
import NewsSliderSec from "../components/NewsSliderSec";
// import NewsBestSec from "../components/NewsBestSec";
import "../assets/scss/news.scss"
import par from '../data/heroData.json';

// const renderLoader = () => <p>Loading</p>;

function News(){
  
  useEffect(()=>{
    window.document.title = 'Unix News';
  }, []);
  const heroPar = par.news;

  return (
    <div id="news-page">
      {/* <Suspense fallback={renderLoader()}> */}
        <HeroSec par={heroPar} />
        <NewsSliderSec />
        {/* <NewsBestSliderSec /> */}
      {/* </Suspense> */}
    </div>
  )
}

export default News;
