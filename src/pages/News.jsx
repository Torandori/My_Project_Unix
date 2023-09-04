import { useEffect } from "react";
import HeroSec from "../components/HeroSec";
import NewsSliderSec from "../components/NewsSliderSec";
import "../assets/scss/news.scss"
import par from '../data/heroData.json';
import { Helmet } from "react-helmet-async";
import pageTitle from '../data/pagesTitles.json';

function News(){
  
  const heroPar = par.news;

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

        <title>{pageTitle.news}</title>
        <meta name="description" content="Latest updates and insights from our digital agency. &#9742; +18880007999" />
        <meta name="robots" content="all" />
        <meta name="revisit-after" content="1 days" />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unixstudio" />
        <meta property="og:description" content="Latest updates and insights from our digital agency communicates that the page offers fresh and valuable content." />
        <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
        <meta property="og:site_name" content=" Unixstudio " />
        <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
        <meta name="twitter:title" content="Unixstudio" />
        <meta name="twitter:description" content="Latest updates and insights from our digital agency communicates that the page offers fresh and valuable content." />
        <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
      </Helmet>
      <div id="news-page">
        <HeroSec par={heroPar} />
        <NewsSliderSec />
      </div>
    </>
  )
}

export default News;
