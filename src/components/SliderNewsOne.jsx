// import { useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import NewsSlideArrow from "./svgComponents/NewsSlideArrow";
// import newsSliderGen from "../data/newsSliderSecData.json";
// import { WN_API_KEY, WN_API, NEWS_CACHE_TIME} from "../env";
// import ky from "ky";
// // import NewsItem from "./NewsItem";
// import { toast } from "react-toastify";
// import newsDefaultImg from '../assets/images/newsDefault.jpg';
// import formatDate from "../helpers/formatDate";


// function SliderNewsOne() {
//   const sliderRef = useRef();
//   const [newsList, setNewsList] = useState([]);
//   const fetchCount = useRef(0);

//   async function fetchNews(){
//     if(fetchCount.current !== 0)
//       return false;

//     fetchCount.current++;
//     const storageNews = localStorage.getItem('newsList');
//     const lastUpdate = +localStorage.getItem('LastNewsUpdate');
//     if(storageNews !== null){
//       const now = new Date().getTime();
//       if((now - lastUpdate) < NEWS_CACHE_TIME) {
//         setNewsList(JSON.parse(storageNews));
//         return false;
//       } 
//     }
  
//     try {
//       const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=3`).json();
//       setNewsList(resp.news);
//       localStorage.setItem('newsList', JSON.stringify(resp.news));
//       localStorage.setItem('lastNewsUpdate', new Date().getTime());
//     } catch (err){
//       // console.log(err);
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
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     centerMode: false,
//   };

//   function prev() {
//     sliderRef.current.slickPrev();
//   }
//   function next() {
//     sliderRef.current.slickNext();
//   }
//   return (
//     <Slider ref={sliderRef} {...sliderSettings}>
//       {newsList.map((item, index) => {
//         return (
//           <div className="news-slider-item" key={index}>
//             <div className="content-wrap">
//               <div className="author">
//                 <div className="pic-wrap">
//                   <img src="assets/images/peter_img.jpg" alt="Picture of Peter Visser" />
//                 </div>
//                 <div className="text">
//                   <div>{item.author}</div>
//                   <div>Head of Project Management</div>
//                 </div>
//               </div>
//               <h2 className="panchang topic">{item.title}</h2>
//               <div className="prev-next-arrows">
//                 <div className="prev" onClick={prev}>
//                   <NewsSlideArrow />
//                 </div>
//                 <div className="next" onClick={next}>
//                   <NewsSlideArrow />
//                 </div>
//               </div>
//             </div>
//             <div className="content-wrap2">
//               <div className="new panchang">{newsSliderGen.newsSliderNum}</div>
//               <div className="date-news">{formatDate(item.publish_date)}</div>
//             </div>
//             <div className="img-wrap">
//               <img src={item.image ?? newsDefaultImg} alt="Picture of new 1" />
//             </div>
//           </div>
//         )
//       })}
//     </Slider>
//   )
// }
// export default SliderNewsOne;