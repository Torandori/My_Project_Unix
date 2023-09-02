import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function NewsItemWN({item}){
  const hash = btoa(item.url);
  // console.log(hash)
  const [newsMock, setNewsMock] = useState([{}, {}]);

  useEffect(() => {
    try {
      fetch('../pubdata/newsDetMockedData.json')
        .then(resp => resp.json())
        .then(resp => {
          setNewsMock(resp);
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const randomIndex = Math.floor(Math.random() * newsMock.length);
  const selectedObj = newsMock[randomIndex];


  return (
    <li>
      <div className="news-list-item">
        <div className="author">
          <div className="pic-wrap">
            <LazyLoadImage src={selectedObj.authImg} alt={authImg.author} effect="blur" />
            {/* <img src={selectedObj.authImg} alt={authImg.author} /> */}
          </div>
          <div className="text">
            <div>{item.author}</div>
            <div>{selectedObj.authPosition}</div>
          </div>
        </div>
        <div className="restTopic">
          <Link to={`/news/${hash}`} className="new-topic" title="Go to news details">{item.title}</Link>
        </div>
        <div className="date-news">{formatDate(item.publish_date)}</div>
        <div className="poster-wrap">
          <LazyLoadImage src={item.image ?? newsDefaultImg} alt={item.title} effect="blur" />
          {/* <img src={item.image ?? newsDefaultImg} alt={item.title} /> */}
        </div>
      </div>
    </li>
  )
}
export default NewsItemWN;