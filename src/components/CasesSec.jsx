import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import casesData from "../data/caseCasesSecData.json"
import Arrow from "./svgComponents/Arrow";

function CasesSec() {
  const [caseItems, setCaseItems] = useState([]);

  useEffect(() => {
    fetch('./pubdata/casesItems.json')
      .then(resp => resp.json())
      .then(resp => {
        setCaseItems(resp);
      })
  }, [])

  return (
    <section id="cases-sec">
      <div className="container">
        <div className="cases-projects">
          <div className="left">
            <div className="project-descr first">
              <h4 className="h4">{casesData.casesLeftTitle}</h4>
              <p className="short-descr">{casesData.casesLeftShortDescr}</p>
            </div>
            <button type="button" className="btn btn-circle-arrow-text dark">
              <span className="btn-content">
                <span className="arrow-in">
                  <Arrow />
                </span>
                <span className="btn-text">{casesData.casesBtnText}</span>
              </span>
            </button>
          </div>

          {caseItems.map((item, index) => {
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
{/* 
        <div className="cases-projects">
          <div className="left">
            <div className="project-descr">
              <div className="h4">saas</div>
              <p className="short-descr">We enter the arena when a SaaS product scales up and problems tend to multiply. We think out each design element and meet the scalability changes that could appear in thelong tun.</p>
            </div>
            <button type="button" className="btn btn-circle-arrow-text dark">
              <span className="btn-content">
                <span className="arrow-in">
                  <Arrow />
                </span>
                <span className="btn-text">start <br /> a project</span>
              </span>
            </button>
          </div>
          <div className="case-item">
            <div className="project-descr">
              <div className="title-wrap">
                <div className="h4">Jams <br /> Associates <span className="year">/2023</span></div>
                <a href="http://jams.basicagency.com/" className="arrow" target="_blank" title="Link to project">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.669 5.5999H3.53176V2.3999H21.1318V19.9999H17.9318V7.86265L4.66313 21.1313L2.40039 18.8685L15.669 5.5999Z" fill="white"/>
                    </svg>
                </a>
              </div>
              <p className="short-descr">The SaaS-based energy and carbon management platform helps mining, manufacturing, and metal industries make the most of their energy consumption, reduce its costs and greenhouse gas emissions.</p>
            </div>
            <div className="img-line">
              <div className="img-wrap">
                <img src="assets/images/new-poster3.jpg" alt="Picture of Metas Project" />
              </div>
              <div className="dashed-line"></div>
            </div>
          </div>
          <div className="case-item">
            <div className="project-descr">
              <div className="title-wrap">
                <div className="h4">seen<span className="year">/2023</span></div>
                <a href="https://www.seen.space/" className="arrow" target="_blank" title="Link to project">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.669 5.5999H3.53176V2.3999H21.1318V19.9999H17.9318V7.86265L4.66313 21.1313L2.40039 18.8685L15.669 5.5999Z" fill="white"/>
                    </svg>
                </a>
              </div>
              <p className="short-descr">It's an online service helping search for flight tickets. Unlike other relevant services, the platform's focus isn't on a budget but on comfort. It allows people to find and pick the best option within minutes.</p>
            </div>
            <div className="img-line">
              <div className="img-wrap">
                <img src="assets/images/new-poster1.jpg" alt="Picture of Teachchain Project" />
              </div>
              <div className="dashed-line"></div>
            </div>
          </div>
          <div className="case-item">
            <div className="project-descr">
              <div className="title-wrap">
                <div className="h4">Vivatech <span className="year">/2023</span></div>
                <a href="https://vivatech2022.cher-ami.tv/" className="arrow" target="_blank" title="Link to project">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.669 5.5999H3.53176V2.3999H21.1318V19.9999H17.9318V7.86265L4.66313 21.1313L2.40039 18.8685L15.669 5.5999Z" fill="white"/>
                    </svg>
                </a>
              </div>
              <p className="short-descr">It&apos;s a B2B highly specialized and complex software for chemical, oil, gas, and bulk carriers in the maritime industry. It encompasses financial analysis and modeling of ship investments, helps manage risks and provide adjusted results.</p>
            </div>
            <div className="img-line">
              <div className="img-wrap">
                <img src="assets/images/poster-4.jpg" alt="Picture of Boel IT" />
              </div>
              <div className="dashed-line"></div>
            </div>
          </div>
          <div className="case-item">
            <div className="project-descr">
              <div className="title-wrap">
                <div className="h4">Atomus <span className="year">/2023</span></div>
                <a href="https://www.atomus.io/" className="arrow" target="_blank" title="Link to project">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.669 5.5999H3.53176V2.3999H21.1318V19.9999H17.9318V7.86265L4.66313 21.1313L2.40039 18.8685L15.669 5.5999Z" fill="white"/>
                    </svg>
                </a>
              </div>
              <p className="short-descr">The SaaS Inbound Video Calls &amp; Customer Engagement Platform is a leader in the space of one-click video technology. The innovative tool empowers customers and companies with the fastest and simplest way to connect from any channel.</p>
            </div>
            <div className="img-line">
              <div className="img-wrap">
                <img src="assets/images/poster-5.jpg" alt="Picture of Teachchain Project" />
              </div>
              <div className="dashed-line"></div>
            </div>
          </div>
          <div className="case-item">
            <div className="project-descr">
              <div className="title-wrap">
                <div className="h4">viita <span className="year">/2023</span></div>
                <a href="https://viita-watches.com/" className="arrow" target="_blank" title="Link to project">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.669 5.5999H3.53176V2.3999H21.1318V19.9999H17.9318V7.86265L4.66313 21.1313L2.40039 18.8685L15.669 5.5999Z" fill="white"/>
                    </svg>
                </a>
              </div>
              <p className="short-descr">It's a financial web app for creating and managing any financial reporting for any type of business. It efficiently performs routine financial reporting procedures and suggests innovative solutions for business owners.</p>
            </div>
            <div className="img-line">
              <div className="img-wrap">
                <img src="assets/images/poster-five.jpg" alt="Picture of Teachchain Project" />
              </div>
              <div className="dashed-line"></div>
            </div>
          </div>
        </div> */}

        <Link to={casesData.casesLinkTo} className="small-link panchang" title={casesData.casesLinkTitle}>{casesData.casesLinkText}</Link>
      </div>
    </section>
  )
}

export default CasesSec;