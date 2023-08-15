import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';

function NewsItemWN({item}){
  const hash = btoa(item.url);
  // console.log(hash)
  const [newsMock, setNewsMock] = useState([{}, {}]);

  useEffect(() => {
    fetch('../pubdata/newsDetMockedData.json')
      .then(resp => resp.json())
      .then(resp => {
        setNewsMock(resp);
      })
  }, [])

  const randomIndex = Math.floor(Math.random() * newsMock.length);
  const selectedObj = newsMock[randomIndex];


  return (
    <li>
      <div className="news-list-item">
        <div className="author">
          <div className="pic-wrap">
            <img src={selectedObj.authImg} alt={authImg.author} />
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
          <img src={item.image ?? newsDefaultImg} alt={item.title} />
        </div>
      </div>
    </li>
  )
}
export default NewsItemWN;