import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../assets/scss/_newsCardHover.scss"

function NewsItem({respData}) {

  const hash = btoa(respData.url);
  console.log("hashNewItem", hash)


  const [newMock, setNewMock] = useState([{}, {}]);

  useEffect(() => {
    try {
      fetch('./pubdata/newsDetMockedData.json')
        .then(resp => resp.json())
        .then(resp => {
          setNewMock(resp);
          console.log('respNewsItem', resp)
        })
    } catch (error) {
      console.log('err', error)
    }
  }, [])

  const randomIndex = Math.floor(Math.random() * newMock.length);
  const selectedObj = newMock[randomIndex];


  return (
    <div className="news-list-item">
      <div className="author">
        <div className="pic-wrap">
          <LazyLoadImage src={selectedObj.authImg} alt={`Picture of ` + selectedObj.authPosition} effect="blur" />
        </div>
        <div className="text">
          <div>{respData.author}</div>
          <div>{selectedObj.authPosition}</div>
        </div>
      </div>
      <div className="restTopic">
        <Link to={`/news/${hash}`}state={{ newsData: respData }} className="new-topic" title="Go to news details">{respData.title}</Link>

      </div>
      <div className="date-news">{formatDate(respData.publish_date)}</div>
      <div className="poster-wrap card-hover">
        <LazyLoadImage src={respData.image ?? newsDefaultImg} alt={respData.title} effect="blur" />
      </div>
    </div>
  )
}
export default NewsItem;