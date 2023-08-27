import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';

function NewIt({respData, randomIt}) {

  const hash = btoa(respData.url);

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
  const mockedObj = newMock[randomIndex];


  console.log("return", hash)
  return (
    <>
      <div className="content-wrap-first">
        <div className="author">
          <div className="pic-wrap">
            <img src={mockedObj.authImg} alt={respData.author} />
          </div>
          <div className="text">
            <div>{respData.author}</div>
            <div>{mockedObj.authPosition}</div>
          </div>
        </div>
        <Link to={`/news/${hash}`} className="new-topic" title="Go to news details">{respData.title}</Link>
      </div>
      <div className="content-wrap2">
        <div className="new panchang">{`new/${randomIt.newNum}`}</div>
        <div className="date-news">{formatDate(respData.publish_date)}</div>
      </div>
      <div className="img-wrap-new">
        <img src={respData.image ?? newsDefaultImg} alt={respData.title} />
      </div>
    </>
  )
}
export default NewIt;