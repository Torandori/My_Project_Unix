import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import casesData from "../data/caseCasesSecData.json"
import Arrow from "./svgComponents/Arrow";
import { useNavigate } from "react-router-dom";
// import ImgPar from "./ImgPar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from "react-responsive";


function CasesSec() {
  const [caseItems, setCaseItems] = useState({ casesFirstBlock: [], casesSecondBlock: [] });
  const moveTo = useNavigate(); 
  const isMobile = useMediaQuery({ maxWidth: 880 });


  const btnClick = () => {
    moveTo('/contacts');
  };

  useEffect(() => {
    try {
      fetch('./pubdata/casesItems.json')
        .then(resp => resp.json())
        .then(resp => {
          setCaseItems(resp);
        })
    } catch (error) {
      console.log('An error occurred while fetching data:', error);
    }
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
          <div className="left" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="500">
            <div className="project-descr first">
              <h4 className="h4">{casesLeftFirst.casesLeftTitle}</h4>
              <p className="short-descr">{casesLeftFirst.casesLeftShortDescr}</p>
            </div>
            <button type="button" onClick={btnClick} className="btn btn-circle-arrow-text dark">
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
              <div className="case-item" key={index} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300">
                <div className="project-descr" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200">
                  <div className="title-wrap">
                    <div className="h4">{item.caseName} <span className="year">{item.caseDate}</span></div>
                    <Link to={item.caseTo} className="arrow" target="_blank" title={item.caseLinkTitle}>
                      <Arrow />
                    </Link>
                  </div>
                  <p className="short-descr">{item.caseDescr}</p>
                </div>
                <div className="img-line" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200">
                {isMobile ? (
                  <div className="img-wrap">
                    <LazyLoadImage
                    alt={item.caseImgAlt}
                    src={item.caseImgUrl}
                    effect="blur" 
                    />
                    {/* <img src={item.caseImgUrl} alt={item.caseImgAlt} /> */}
                    <div className="overlay"></div>
                  </div>
                ) : (
                  <Parallax rotate={['-20', '10']}>
                    <div className="img-wrap">
                      <LazyLoadImage
                      alt={item.caseImgAlt}
                      src={item.caseImgUrl}
                      effect="blur" 
                      />
                      {/* <img src={item.caseImgUrl} alt={item.caseImgAlt} /> */}
                      <div className="overlay"></div>
                    </div>
                  </Parallax>
                )}
                  <div className="dashed-line"></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="cases-projects">
          <div className="left" data-aos="flip-down" data-aos-easing="ease-out-cubic" data-aos-duration="500">
            <div className="project-descr" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200">
              <div className="h4">{casesLeftSecond.casesLeftTitle}</div>
              <p className="short-descr">{casesLeftSecond.casesLeftShortDescr}</p>
            </div>
            <button type="button" onClick={btnClick} className="btn btn-circle-arrow-text dark">
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
              <div className="case-item" key={index} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300">
                <div className="project-descr">
                  <div className="title-wrap">
                    <div className="h4">{item.caseName} <span className="year">{item.caseDate}</span></div>
                    <Link to={item.caseTo} className="arrow" target="_blank" title={item.caseLinkTitle}>
                      <Arrow />
                    </Link>
                  </div>
                  <p className="short-descr">{item.caseDescr}</p>
                </div>
                <div className="img-line" data-aos="fade-down" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200">
                  {/* <ImgPar item={item}/> */}
                {isMobile ? (
                  <div className="img-wrap">
                    <LazyLoadImage
                      alt={item.caseImgAlt}
                      src={item.caseImgUrl}
                      effect="blur" 
                    />
                    {/* <img src={item.caseImgUrl} alt={item.caseImgAlt} /> */}
                    <div className="overlay"></div>
                  </div>
                ) : (
                  <Parallax rotate={['-20', '10']}>
                    <div className="img-wrap">
                      <LazyLoadImage
                        alt={item.caseImgAlt}
                        src={item.caseImgUrl}
                        effect="blur" 
                      />
                      {/* <img src={item.caseImgUrl} alt={item.caseImgAlt} /> */}
                      <div className="overlay"></div>
                    </div>
                  </Parallax>
                )}
                  <div className="dashed-line"></div>
                </div>
              </div>
            )
          })}
        </div>
        <Link to={casesLink.casesLinkTo} className="small-link panchang" title={casesLink.casesLinkTitle} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300">{casesLink.casesLinkText}</Link>
      </div>
    </section>
  )
}

export default CasesSec;