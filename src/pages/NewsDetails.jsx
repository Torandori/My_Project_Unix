import { Link, useParams } from "react-router-dom";
import { NC_API, NC_API_KEY } from "../env";
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import formatDate from "../helpers/formatDate"
import LinkedinShare from "../components/svgComponents/LinkedinShare";
import PinterestShare from "../components/svgComponents/PinterestShare";
import '../assets/scss/news-details.scss'
import HeroSecNewsDet from "../components/HeroSecNewsDet";
import Loader from "../components/Loader";
import { useLocation } from 'react-router-dom';


function NewsDetails(){
  const location = useLocation();
  const newsData = location.state.newsData;
  console.log(newsData)

  return(
    <div id="news-details-page">
      <HeroSecNewsDet propNews={newsData} />
      <div id="detail-overview-sec">
        <div className="container">
          <div className="detail-overview-wrap1">
            <div className="author">
              <div className="pic-wrap">
                <img src="assets/images/peter_img.jpg" alt="Picture of Peter Visser" />
              </div>
              <div className="text">
                <div>{newsData.author}</div>
                <div>Head of Project Management</div>
              </div>
            </div>
            <div className="date-news">{formatDate(newsData.published_date)}</div>
          </div>
          <div className="detail-overview-wrap2">
            <div className="overview panchang">Overview</div>
            <p className="summary-text">{newsData.excerpt}</p>
          </div>
        </div>
      </div>

      <section id="detail-text-sec">
        <div className="container">
          <div className="detail-text-wrap">
            <div className="share-col">
              <div className="share-wrap">
                <div>Share:</div>
                <ul className="share-links">
                  <li>
                    <Link to="https://www.linkedin.com/" title="Go to Linkedin" target="_blank" rel="noreferrer nofollow">
                      <LinkedinShare />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.pinterest.com/" title="Got to Pinterest" target="_blank" rel="noreferrer nofollow">
                      <PinterestShare />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-col">
              <p>{newsData.summary}</p>
              <div className="poster-detail-wrap">
                <img src={newsData.media ? newsData.media : newsDefaultImg} alt={newsData.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default NewsDetails;
