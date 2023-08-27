import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
import { useState, useEffect, useRef } from "react";
import NewIt from "./NewIt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ky from "ky";
import { toast } from "react-toastify";

function SliderNewsLine() {
  const isDev = false; 

  const [newsLine, setNewsLine] = useState([]);
  
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
        console.log("resp", resp)


      setNewsLine(resp.news);
      localStorage.setItem('newsLine', JSON.stringify(resp.news));
      localStorage.setItem('lastNewsUpdate', new Date().getTime());
    } catch (err){
      console.log(err);
      toast.error("Some error occured");
    }
  }

  useEffect(() => {
    console.log("newsLine in useEffect:", newsLine)
    fetchNews();
  }, []);



  [...]

  return (
    <div className="news-slider">
      <div className="newSlider">
        <Slider {...sliderFirstSet} ref={sliderNewRef}>
          {newsLine.map(item =>  (
            <NewIt respData={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default SliderNewsLine;

         