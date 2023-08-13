import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
import ky from "ky";
import NewsItem from "./NewsItem";
import { toast } from "react-toastify";
import formatDate from "../helpers/formatDate";
import Loader from "./Loader";

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
      const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=3`).json();
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

          {/* <li>
            <div className="news-list-item">
              <div className="author">
                <div className="pic-wrap">
                  <img src="assets/images/news-card2.jpg" alt="Picture of Rita Paul" />
                </div>
                <div className="text">
                  <div>rita poul</div>
                  <div>Head of Project Management</div>
                </div>
              </div>
              <a href="newsDetails.html" className="new-topic" title="Go to news details">How to structure data on NFT dashboards?</a>
              <div className="date-news">October 3,2022</div>
              <div className="poster-wrap">
                <img src="assets/images/new-poster2.jpg" alt="Poster of new 1" />
              </div>
            </div>
          </li>
          <li>
            <div className="news-list-item">
              <div className="author">
                <div className="pic-wrap">
                  <img src="assets/images/news-card3.jpg" alt="Picture of Rita Paul" />
                </div>
                <div className="text">
                  <div>victor trivett</div>
                  <div>Head of Project Management</div>
                </div>
              </div>
              <a href="newsDetails.html" className="new-topic" title="Go to news details">How to make a pitch deck that wins investors</a>
              <div className="date-news">October 3,2022</div>
              <div className="poster-wrap">
                <img src="assets/images/new-poster3.jpg" alt="Poster of new 1" />
              </div>
            </div>
          </li> */}


//           import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";

// import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
// import { useState, useEffect, useRef } from "react";
// import ky from "ky";
// import NewsItem from "./NewsItem";
// import { toast } from "react-toastify";

// function SliderNewsLine() {

//   const [newsLine, setNewsLine] = useState([]);
//   const fetchCount = useRef(0);

//   async function fetchNews(){
//     if(fetchCount.current !== 0)
//       return false;

//     fetchCount.current++;
//     const storageNews = localStorage.getItem('newsLine');
//     const lastUpdate = +localStorage.getItem('LastNewsUpdate');
//     if(storageNews !== null){
//       const now = new Date().getTime();
//       if((now - lastUpdate) < NEWS_CACHE_TIME) {
//         setNewsLine(JSON.parse(storageNews));
//         return false;
//       } 
//     }
  
//     try {
//       const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=9`).json();
//       setNewsLine(resp.news);
//       localStorage.setItem('newsList', JSON.stringify(resp.news));
//       localStorage.setItem('lastNewsUpdate', new Date().getTime());
//     } catch (err){
//       console.log(err);
//       toast.error("Some error occured");
//     }
//   }

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     centerMode: false,
//   };

//   return (
//     <Slider {...sliderSettings}>
//       <div className="news-line">
//         <ul className="news-list">
//           {newsLine.map(item => {
//             return (
//               <NewsItem item={item} key={item.id} />
//             )
//           })}
//         </ul>
//       </div>
//     </Slider>
//   )
// }
// export default SliderNewsLine;