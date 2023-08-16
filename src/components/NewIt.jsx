import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';

function NewIt({item}) {

  const hash = btoa(item.url);
  const [newMock, setNewMock] = useState([{}, {}]);

  useEffect(() => {
    fetch('./pubdata/newsDetMockedData.json')
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
            <img src={mockedObj.authImg} alt={item.author} />
          </div>
          <div className="text">
            <div>{item.author}</div>
            <div>{mockedObj.authPosition}</div>
          </div>
        </div>
        <Link to={`/news/${hash}`} state={{ newsData: item }} className="new-topic" title="Go to news details">{item.title}</Link>
      </div>
      <div className="content-wrap2">
        <div className="new panchang">new/</div>
        <div className="date-news">{formatDate(item.publish_date)}</div>
      </div>
      <div className="img-wrap-new">
        <img src={item.image ?? newsDefaultImg} alt={item.title} />
      </div>
    </>
  )
}
export default NewIt;