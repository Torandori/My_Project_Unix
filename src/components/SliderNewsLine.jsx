import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
import { useState, useEffect, useRef } from "react";
import NewsItem from "./NewsItem";
import NewIt from "./NewIt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ky from "ky";
import { toast } from "react-toastify";
import Loader from "./Loader";
import NewArrow from "./svgComponents/newArrow";
// import formatDate from "../helpers/formatDate";

function SliderNewsLine() {
  const isDev = false;

  const [newsLine, setNewsLine] = useState([]);
  const [loading, setLoading] = useState(true)
  
  const fetchCount = useRef(0);
  const sliderNewRef = useRef();


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
      const resp = isDev 
      ? await fetch('../mock/mockNews.json').then(response => response.json())
      : await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=6`, {
        timeout: 15000,
      }).json();

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
  const sliderFirstSet = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  const sliderSecondSet = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  function prev() {
    sliderNewRef.current.slickPrev();
  }
  function next() {
    sliderNewRef.current.slickNext();
  }


  return (
    <div className="news-slider">
      <div className="newSlider">
        <div className="prev-next-arrows">
          <button type="button" className="prev" onClick={prev}>
            <NewArrow />
          </button>
          <button className="next" onClick={next}>
             <NewArrow />
          </button>
        </div>
        <Slider {...sliderFirstSet} ref={sliderNewRef}>
          {newsLine.map(item => {
            return (
              <NewIt item={item} key={item.id} />
            )
          })}
        </Slider>
      </div>

      <div className="news-line">
        <ul className="news-list">
          <Slider {...sliderSecondSet}>
            {newsLine.map(item => {
              return (
                <NewsItem item={item} key={item.id} />
              )
            })}
          </Slider>
        </ul>
      </div>
    </div>
  )
}
export default SliderNewsLine;

         