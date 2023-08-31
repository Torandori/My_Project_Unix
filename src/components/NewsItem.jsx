import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function NewsItem({item}) {

  const hash = btoa(item.url);

  const [newMock, setNewMock] = useState([{}, {}]);

  useEffect(() => {
    try {
      fetch('./pubdata/newsDetMockedData.json')
        .then(resp => resp.json())
        .then(resp => {
          setNewMock(resp);
          console.log(resp)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const randomIndex = Math.floor(Math.random() * newMock.length);
  const selectedObj = newMock[randomIndex];


  return (
    // <>
      <div className="news-list-item">
        <div className="author">
          <div className="pic-wrap">
            <LazyLoadImage src={selectedObj.authImg} alt={`Picture of ` + selectedObj.authPosition} effect="blur" />
            {/* <img src={selectedObj.authImg} alt={selectedObj.author} /> */}
          </div>
          <div className="text">
            <div>{item.author}</div>
            <div>{selectedObj.authPosition}</div>
          </div>
        </div>
        <div className="restTopic">
          {/* <Link to={`/news/${hash}`} className="new-topic" title="Go to news details">{item.title}</Link> */}
          <Link to={`/news/${hash}`} state={{ newsData: item }} className="new-topic" title="Go to news details">{item.title}</Link>

        </div>
        <div className="date-news">{formatDate(item.publish_date)}</div>
        <div className="poster-wrap">
          <LazyLoadImage src={item.image ?? newsDefaultImg} alt={item.title} effect="blur" />
          {/* <img src={item.image ?? newsDefaultImg} alt={item.title} /> */}
        </div>
      </div>
    // </li>
  )
}
export default NewsItem;