import React from "react";
import StartBtn from "./svgComponents/StartBtn";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ServDetHowSec({descr}) {
  const under = descr.howSec;
  const _under = under.howList;

  const moveTo = useNavigate();

  const btnClick = () => {
    moveTo('/contacts');
  };

  return (
    <section id="how-sec">
      <div className="container">
        <div className="big-img-wrap">
          <LazyLoadImage src={under.howImgUrl} alt={under.howImgAlt} title={under.howImgAlt} effect="blur" />
          {/* <img src={under.howImgUrl} alt={under.howImgAlt} title={under.howImgAlt} /> */}
        </div>
        <div className="block-text-under-pic">
          <h2 className="h2">{under.servDetUnderTitle}</h2>
          <p className="text">{under.servDetUnderDescr}</p>
        </div>
        <div className="how-list">
          {_under.map((item, index) => {

            return (
              <React.Fragment key={index}>
                <div className="number cell">{item.howListNumber}</div>
                <div className="name cell">{item.howListTitle}</div>
                <p className="item-descr cell">{item.howListDescr}</p>
              </React.Fragment>
            )
          })}
        </div>
        <div className="big-text panchang"><span className="margin">{under.servDetBigName}</span>{under.servDetBigNameContinue}
          <button type="button" onClick={btnClick} className="btn project-btn" aria-label="Click to start a project">
            <StartBtn />
          </button>
        </div>
      </div>
    </section>
  )
}
export default ServDetHowSec;