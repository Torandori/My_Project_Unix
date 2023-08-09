import React from "react";
import StartBtn from "./svgComponents/StartBtn";

function ServDetHowSec({descr}) {
  const under = descr.howSec;
  const _under = under.howList;
  console.log(under.howImgUrl);

  return (
    <section id="how-sec">
      <div className="container">
        <div className="big-img-wrap">
          <img src={under.howImgUrl} alt="Picture of team" />
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
          <button type="button" className="btn project-btn">
            <StartBtn />
          </button>
        </div>
      </div>
    </section>
  )
}
export default ServDetHowSec;