import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import casesData from "../data/caseCasesSecData.json"
import Arrow from "./svgComponents/Arrow";

function CasesSec() {
  const [caseItems, setCaseItems] = useState({ casesFirstBlock: [], casesSecondBlock: [] });


  useEffect(() => {
    fetch('./pubdata/casesItems.json')
      .then(resp => resp.json())
      .then(resp => {
        setCaseItems(resp);
      })
  }, [])

  const casesFirst = caseItems.casesFirstBlock;
  const casesSecond = caseItems.casesSecondBlock;
  const casesLeftFirst = casesData[0]
  const casesLeftSecond = casesData[1]
  const casesLink = casesData[2]


  return (
    <section id="cases-sec">
      <div className="container">
        <div className="cases-projects">
          <div className="left">
            <div className="project-descr first">
              <h4 className="h4">{casesLeftFirst.casesLeftTitle}</h4>
              <p className="short-descr">{casesLeftFirst.casesLeftShortDescr}</p>
            </div>
            <button type="button" className="btn btn-circle-arrow-text dark">
              <span className="btn-content">
                <span className="arrow-in">
                  <Arrow />
                </span>
                <span className="btn-text">{casesLeftFirst.casesBtnText}</span>
              </span>
            </button>
          </div>
          {casesFirst.map((item, index) => {
            return (
              <div className="case-item" key={index}>
                <div className="project-descr">
                  <div className="title-wrap">
                    <div className="h4">{item.caseName} <span className="year">{item.caseDate}</span></div>
                    <Link to={item.caseTo} className="arrow" target="_blank" title={item.caseLinkTitle}>
                      <Arrow />
                    </Link>
                  </div>
                  <p className="short-descr">{item.caseDescr}</p>
                </div>
                <div className="img-line">
                  <div className="img-wrap">
                    <img src={item.caseImgUrl} alt={item.caseImgAlt} />
                  </div>
                  <div className="dashed-line"></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="cases-projects">
          <div className="left">
            <div className="project-descr">
              <div className="h4">{casesLeftSecond.casesLeftTitle}</div>
              <p className="short-descr">{casesLeftSecond.casesLeftShortDescr}</p>
            </div>
            <button type="button" className="btn btn-circle-arrow-text dark">
              <span className="btn-content">
                <span className="arrow-in">
                  <Arrow />
                </span>
                <span className="btn-text">{casesLeftSecond.casesBtnText}</span>
              </span>
            </button>
          </div>
          {casesSecond.map((item, index) => {
            return (
              <div className="case-item" key={index}>
                <div className="project-descr">
                  <div className="title-wrap">
                    <div className="h4">{item.caseName} <span className="year">{item.caseDate}</span></div>
                    <Link to={item.caseTo} className="arrow" target="_blank" title={item.caseLinkTitle}>
                      <Arrow />
                    </Link>
                  </div>
                  <p className="short-descr">{item.caseDescr}</p>
                </div>
                <div className="img-line">
                  <div className="img-wrap">
                    <img src={item.caseImgUrl} alt={item.caseImgAlt} />
                  </div>
                  <div className="dashed-line"></div>
                </div>
              </div>
            )
          })}
        </div>

        <Link to={casesLink.casesLinkTo} className="small-link panchang" title={casesLink.casesLinkTitle}>{casesLink.casesLinkText}</Link>
      </div>
    </section>
  )
}

export default CasesSec;