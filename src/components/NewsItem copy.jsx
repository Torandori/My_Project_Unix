import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';

function NewsItem({item}){
  const hash = btoa(item.url);
  // console.log(hash)

  return (
    <li>
      <div className="news-list-item">
        <div className="author">
          <div className="pic-wrap">
            <img src="assets/images/news-card1.jpg" alt="Picture of Cynthia Houle" />
          </div>
          <div className="text">
            <div>{item.author}</div>
            <div>Head of Project Management</div>
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
export default NewsItem;