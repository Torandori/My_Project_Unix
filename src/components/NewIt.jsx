import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from 'react-responsive';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import formatDate from "../helpers/formatDate"
import newsDefaultImg from '../assets/images/newsDefault.jpg';

function NewIt({respData, randomIt}) {
  const isMobile = useMediaQuery({ maxWidth: 880 });

  const hash = btoa(respData.url);
  // console.log('respData', respData)
  
  const [newMock, setNewMock] = useState([{}, {}]);

  useEffect(() => {
    try {
      fetch('./pubdata/newsDetMockedData.json')
        .then(resp => resp.json())
        .then(resp => {
          setNewMock(resp);
          // console.log('resp', resp)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const randomIndex = Math.floor(Math.random() * newMock.length);
  const mockedObj = newMock[randomIndex];


  // console.log("hashNewIt", hash)

  return (
    <>
      <div className="content-wrap-first">
        <div className="author">
          <div className="pic-wrap">
            <LazyLoadImage src={mockedObj.authImg} alt={respData.author} effect="blur" />
          </div>
          <div className="text">
            <div>{respData.author}</div>
            <div>{mockedObj.authPosition}</div>
          </div>
        </div>
        <Link to={`/news/${hash}`} state={{ newsData: respData }} className="new-topic" title="Go to news details">{respData.title}</Link>

      </div>
        <div className="content-wrap2">
          {isMobile ? (
            <div className="new panchang">{`new/${randomIt.newNum}`}</div>
          ) : (
            <Parallax translateX={['-10px', '70px']}>
              <div className="new panchang">{`new/${randomIt.newNum}`}</div>
            </Parallax>
          )}
          <div className="date-news">{formatDate(respData.publish_date)}</div>
        </div>
      <div className="img-wrap-new">
        <LazyLoadImage  src={respData.image ?? newsDefaultImg} alt={respData.title} effect="blur" />
      </div>
    </>
  )
}
export default NewIt;