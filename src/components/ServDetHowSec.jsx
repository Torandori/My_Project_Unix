import { useState } from 'react'
import ContactsModal from './ContactsModal';
import React from "react";
import StartBtn from "./svgComponents/StartBtn";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery } from 'react-responsive';

function ServDetHowSec({descr}) {
  const isMobile = useMediaQuery({ maxWidth: 880 });

  const under = descr.howSec;
  const _under = under.howList;

  const moveTo = useNavigate();

  const btnClick = () => {
    moveTo('/contacts');
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };
  

  return (
    <section id="how-sec">
      <div className="container">
        <div className="big-img-wrap">
          <LazyLoadImage src={under.howImgUrl} alt={under.howImgAlt} title={under.howImgAlt} effect="blur" />
        </div>
        <div className="block-text-under-pic" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
          <h2 className="h2">{under.servDetUnderTitle}</h2>
          <p className="text">{under.servDetUnderDescr}</p>
        </div>
        <div className="how-list" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="700">
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
        {isMobile ? ( 
          <div className="big-text panchang"><span className="margin">{under.servDetBigName}</span>{under.servDetBigNameContinue}
            <button type="button" onClick={btnClick} className="btn project-btn" aria-label="Click to start a project">
              <StartBtn />
            </button>
          </div>
        ) :
        (
          <Parallax translateX={['-100px', '100px']}>
            <div className="big-text panchang"><span className="margin">{under.servDetBigName}</span>{under.servDetBigNameContinue}
              <button type="button" onClick={btnClick} className="btn project-btn" aria-label="Click to start a project">
                <StartBtn />
              </button>
            </div>
          </Parallax>
        )}
      </div>
      <ContactsModal isOpen={modalOpen} onClose={closeModal} />
    </section>
  )
}
export default ServDetHowSec;