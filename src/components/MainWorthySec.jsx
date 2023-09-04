import { useState, useEffect } from 'react';
import btnCircle from '../assets/images/svg/btnCircle.svg'
import { Link } from 'react-router-dom'
import worthyData from '../data/mainWorthySecData.json'
import PromoLines from './PromoLines';
import ContactsModal from './ContactsModal';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';

function MainWorthySec() {
  const [worthyItems, setWorthyItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 880 });

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    try {
      fetch('./pubdata/mainWorthyItems.json')
      .then(resp => resp.json())
      .then(resp => {
        setWorthyItems(resp);
      })
    } catch (error) {
      console.log('An error occurred while fetching data:', error)
    }
  }, []);

  return (
    <section id="we-worthy-sec">
      <div className="promo-second">
        <PromoLines />
      </div>
      <div className="container">
        <h3 className="h3" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{worthyData.worthyTitle}</h3>
        <div className="wrap" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="100">
          <div className="title-ending ">
            <span className="small-text">{worthyData.worthySmallText}</span>  <span className="h3 margin">{worthyData.worthyTitleContinue}</span>
            <span>
              <button type="button" className="btn btn-circle" onClick={openModal}>
                <img src={btnCircle} alt={worthyData.worthyBtnAlt} />
              </button>
            </span>
            <span className="h3">{worthyData.worhtyTitleEnd}</span>
          </div>
          <div className="around-title small-text">
           {worthyData.worthySmallTextTwo}
          </div>
        </div>
        <ContactsModal isOpen={modalOpen} onClose={closeModal} />

        <div className="worthy-grid">
          <div className="empty">
            <Link to={worthyData.worthyLinkTo} className="small-link" title={worthyData.worthyLinkTitle} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="200">
              <span className="mask">
                <div className="small-link-container">
                  <span className="small-link-title1 title">{worthyData.worthyLinkName}</span>
                  <span className="small-link-title2 title">{worthyData.worthyLinkName}</span>
                </div>
              </span>
            </Link>
          </div>
          <div className="border1"></div>
          <div className="nocontent"></div>
          <div className="nocontent"></div>

            {worthyItems.map((item, index) => {
              return (
                <div className={item.worthyItemClass} key={index} >
                    <p>{item.worthyItemText}</p>
                    {isMobile ? (
                      <div>{item.worthyItemCount}</div>
                    ) : (
                      <Parallax  translateX={['-20px', '50px']}>
                        <div>{item.worthyItemCount}</div>
                      </Parallax>
                    )}
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default MainWorthySec;