import princ from '../data/aboutPrinciplesSecData.json';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';

function AboutPrinciplesSec() {
  const isMobile = useMediaQuery({ maxWidth: 880 });

  return (
    <section id="principals-sec">
        <div className="container">
          <h2 className="h2" data-aos="flip-right" data-aos-easing="ease-in-out-quart" data-aos-duration="600" data-aos-delay="300">{princ.princTitle}</h2>
          <div className="pricnciples-wrap">
            <div className="empty-col"></div>
            <div className="pricnciples-item">
              <div className="princiles-text">
                <div className="wrap">
                  <span className="small-text">{princ.princSubtitle}</span>
                  <p className="paragraph">{princ.princTextStart}</p>
                </div>
                <p>{princ.princTextEnd}</p>
              </div>

              <div className="interact-elements">
                {princ.princElements.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {isMobile ? ( 
                        <div className={item.princClass}><span>{item.aboutPrincTitle}</span></div>
                      ) : (
                        <Parallax rotateY={['360', '0']}>
                          <div className={item.princClass}><span>{item.aboutPrincTitle}</span></div>
                        </Parallax>
                      )}
                    </React.Fragment>
                  )
                })}
              </div>
            </div>

            <div className="pricnciples-item second">
              <div className="wrap">
                <span className="small-text">{princ.Subtitle}</span>
                <p className="par">{princ.princUnderText}</p>
              </div>
              <p className="next-par">{princ.princUnderTextTwo}</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutPrinciplesSec;