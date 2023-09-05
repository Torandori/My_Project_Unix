// // import { WN_API, WN_API_KEY } from "../env";
// import { useParams } from "react-router-dom";
// import { useState, useRef, useEffect } from "react";
// import newsDefaultImg from '../assets/images/newsDefault.jpg';
// import HeroSecNewsDet from "../components/HeroSecNewsDet";
// import formatDate from "../helpers/formatDate"
// // import Loader from "../components/Loader";
// // import ky from "ky";
// // import { toast } from "react-toastify";
// import '../assets/scss/news-details.scss';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import pageTitle from '../data/pagesTitles.json';
// import { Helmet } from "react-helmet-async";
// import { useLocation } from 'react-router-dom';



// function NewsDetails(){
//   const location = useLocation();
//   const newsData = location.state?.newsData || {};
//   const [newsDetMock, setNewsDetMock] = useState([{}, {}]);

//   useEffect(() => {
//     try {
//       fetch('./pubdata/newsDetMockedData.json')
//         .then(resp => resp.json())
//         .then(resp => {
//           setNewsDetMock(resp);
//         })
//     } catch (error) {
//       console.log('err', error)
//     }
//   }, [])

//   const randomObjIndex = Math.floor(Math.random() * newsDetMock.length);
//   const selectedAuthObj = newsDetMock[randomObjIndex];


//   return(
//     <>
//       <Helmet>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" data-rh="true" />

//         <title>{pageTitle.news}</title>
//         <meta name="description" content="Industry trends, expert opinions, and noteworthy achievements. &#9742; +18880007999" />
//         <meta name="robots" content="all" />
//         <meta name="revisit-after" content="1 days" />

//         <meta property="og:locale" content="en_US" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Unixstudio" />
//         <meta property="og:description" content="Industry trends, expert opinions, and noteworthy achievements." />
//         <meta property="og:url" content="https://torandori.github.io/My_Project_Unix/" />
//         <meta property="og:site_name" content=" Unixstudio " />
//         <meta property="og:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
//         <meta name="twitter:title" content="Unixstudio" />
//         <meta name="twitter:description" content="Industry trends, expert opinions, and noteworthy achievements." />
//         <meta name="twitter:image" content="https://torandori.github.io/My_Project_Unix/assets/logo-91daf828.svg" />
//         {/* <meta name="description" content="This is the meta description for this specific page." /> */}
//       </Helmet>
//         <div id="news-details-page">
//           <HeroSecNewsDet resp={newsData}/>
//           <div id="detail-overview-sec">
//             <div className="container">
//               <div className="detail-overview-wrap1" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
//                 <div className="author">
//                   <div className="pic-wrap">
//                     <LazyLoadImage src={selectedAuthObj.authImg} alt={newsData.author} effect="blur" />
//                   </div>
//                   <div className="text">
//                     <div>{newsData.author}</div>
//                     <div>{selectedAuthObj.authPosition}</div>
//                   </div>
//                 </div>
//                 <div className="overview panchang">Overview</div>
//                 <div className="date-news">{formatDate(newsData.publish_date)}</div>
//               </div>
//             </div>
//           </div>
  
//           <section id="detail-text-sec">
//             <div className="container">
//               <div className="detail-text-wrap">
//                 <div className="text-col">
//                   <div className="poster-detail-wrap" data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="500">
//                     <LazyLoadImage src={newsData.image ? newsData.image : newsDefaultImg} alt="News picture" effect="blur" />
//                   </div>
//                   <p>{newsData.text}</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//     </>
//   )
// }
// export default NewsDetails;
