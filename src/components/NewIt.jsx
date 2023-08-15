import { useEffect, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';
import NewArrow from "./svgComponents/newArrow";

function NewIt({item}) {

  const hash = btoa(item.url);
  const [newMock, setNewMock] = useState([{}, {}]);

  useEffect(() => {
    fetch('../pubdata/newsDetMockedData.json')
      .then(resp => resp.json())
      .then(resp => {
        setNewMock(resp);
        console.log(resp)
      })
  }, [])

  const randomIndex = Math.floor(Math.random() * newMock.length);
  const mockedObj = newMock[randomIndex];


  return (
    <>
      <div className="content-wrap-first">
        <div className="author">
          <div className="pic-wrap">
            <img src="assets/images/peter_img.jpg" alt="Picture of Peter Visser" />
          </div>
          <div className="text">
            <div>{item.author}</div>
            <div>{mockedObj.authPosition}</div>
          </div>
        </div>
        <Link to={`/news/${hash}`} state={{ newsData: item }} className="new-topic" title="Go to news details">{item.title}</Link>
        {/* <div className="prev-next-arrows">
          <button type="button" className="prev" onClick={prev}>
            <NewArrow />
          </button>
          <button className="next" onClick={next}>
             <NewArrow />
          </button>
        </div> */}
      </div>
      <div className="content-wrap2">
        <div className="new panchang">new/1</div>
        <div className="date-news">{formatDate(item.publish_date)}</div>
      </div>
      <div className="img-wrap-new">
        <img src={item.image ?? newsDefaultImg} alt={item.title} />
      </div>
    </>
  )
}
export default NewIt;