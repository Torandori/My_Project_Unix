import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';


function NewIt({respData, randomIt}) {

  const hash = btoa(respData.url);

  return (
    <>
      <div className="content-wrap-first" data-aos="slide-right" data-aos-easing="ease-out-cubic" data-aos-duration="400">
        <Link to={`/news/${hash}`} className="new-topic" title="Go to news details">{respData.title}</Link>
      </div>
      <div className="content-wrap2" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200">
        <div className="date-news">{formatDate(respData.publish_date)}</div>
      </div>
      <div className="img-wrap-new">
        <img src={respData.image ?? newsDefaultImg} alt={respData.title} />
      </div>
    </>
  )
}
export default NewIt;