import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
import { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ky from "ky";
import { toast } from "react-toastify";
import Loader from "./Loader";
// import formatDate from "../helpers/formatDate";

function SliderNewsLine() {

  const [newsLine, setNewsLine] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchCount = useRef(0);

  async function fetchNews(){
    if(fetchCount.current !== 0)
      return false;

    fetchCount.current++;
    const storageNews = localStorage.getItem('newsLine');
    const lastUpdate = +localStorage.getItem('LastNewsUpdate');
    if(storageNews !== null){
      const now = new Date().getTime();
      if((now - lastUpdate) < NEWS_CACHE_TIME) {
        setNewsLine(JSON.parse(storageNews));
        setLoading(false);
        return false;
      } 
    }
  
    try {
      const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=6`).json();

      setNewsLine(resp.news);
      localStorage.setItem('newsLine', JSON.stringify(resp.news));
      localStorage.setItem('lastNewsUpdate', new Date().getTime());
      setLoading(false);
    } catch (err){
      console.log(err);
      toast.error("Some error occured");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, []);


  if(loading){
    return (<Loader />)
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
  };

  return (
    <div className="news-line">
      <ul className="news-list">
        <Slider {...sliderSettings}>
          {newsLine.map(item => {
            return (
              <NewsItem item={item} key={item.id} />
            )
          })}
        </Slider>
      </ul>
    </div>
  )
}
export default SliderNewsLine;

         