import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import NewsItem from "./NewsItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NewIt from "./NewIt";
import Loader from "./Loader";
import NewArrow from "./svgComponents/newArrow";

function SliderNewsLine() {
  const isDev = true; //is true - mock

  const [newsLine, setNewsLine] = useState([]);
  const [loading, setLoading] = useState(true)
  
  const fetchCount = useRef(0);
  const sliderNewRef = useRef();

  const [newMock, setNewMock] = useState([{}, {}]);

  useEffect(() => {
    try {
      fetch('./pubdata/newsDetMockedData.json')
        .then(resp => resp.json())
        .then(resp => {
          setNewMock(resp);
          console.log('respPosition', resp)
        })
    } catch (error) {
      console.log('err', error);
    }
  }, [])


  async function fetchNews(){
    if(fetchCount.current !== 0) {
      return false;
    }
    fetchCount.current++;

    const storageNews = localStorage.getItem('newsLine');
    const lastUpdate =+ localStorage.getItem('LastNewsUpdate');
    if(storageNews !== null){
      const now = new Date().getTime();
      if((now - lastUpdate) < NEWS_CACHE_TIME) {
        setNewsLine(JSON.parse(storageNews));
        setLoading(false);
        return false;
      } 
    }
    try {
      const url = isDev 
      ? './mock/mockNews.json'
      : `${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=6`;
      const resp = await ky(url, {
          timeout: 15000,
        }).json();
      console.log("respNewsLine", resp)
      // const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=6`).json();
      setNewsLine(resp.news);
      localStorage.setItem('newsLine', JSON.stringify(resp.news));
      localStorage.setItem('lastNewsUpdate', new Date().getTime());
      setLoading(false);
    } catch (err){
      console.log('err', err);
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
    lazyLoad: true,
    arrows: false,
  }
  const sliderSecondSet = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
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
        breakpoint: 800,
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
      <div className="newSlider" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
        <div className="prev-next-arrows">
          <button type="button" className="prev" onClick={prev} aria-label="Previous slide">
            <NewArrow />
          </button>
          <button type="button" className="next" onClick={next} aria-label="Next slide">
             <NewArrow />
          </button>
        </div>
        <Slider {...sliderFirstSet} ref={sliderNewRef}>
          {newsLine.map((item, index) =>  (
            <NewIt respData={item} key={item.id} randomIt={newMock[index]} />
          ))}
        </Slider>
      </div>

      <div className="news-line" data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="500">
        <div className="news-list">
          <Slider {...sliderSecondSet}>
            {newsLine.map(item => {
              return (
                <NewsItem respData={item} key={item.id} />
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default SliderNewsLine;
