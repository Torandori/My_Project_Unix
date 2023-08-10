import HeroSec from "../components/HeroSec";
import NewsSliderSec from "../components/NewsSliderSec";
import NewsBestSec from "../components/NewsBestSec";

import "../assets/scss/news.scss"

function News() {
  return (
    <div class="news-grafic-bg news-body-bg" >
      <HeroSec title="news" />
      <NewsSliderSec />
      <NewsBestSec />
    </div>
  )
}
export default News;