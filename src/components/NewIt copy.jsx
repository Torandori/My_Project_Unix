import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';


function NewIt({respData, randomIt}) {

  const hash = btoa(respData.url);

  return (
    <>
      <div className="content-wrap-first">
        <Link to={`/news/${hash}`} className="new-topic" title="Go to news details">{respData.title}</Link>
      </div>
      <div className="content-wrap2">
        <div className="date-news">{formatDate(respData.publish_date)}</div>
      </div>
      <div className="img-wrap-new">
        <img src={respData.image ?? newsDefaultImg} alt={respData.title} />
      </div>
    </>
  )
}
export default NewIt;