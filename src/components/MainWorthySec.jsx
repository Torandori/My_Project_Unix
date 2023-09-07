import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import { lazy, Suspense } from 'react';
import worthyData from '../data/mainWorthySecData.json'
const ContactsModal = lazy(() => import('./ContactsModal'));
const PromoLines = lazy(() => import('./PromoLines'));
const btnCircle = lazy(() => import('../assets/images/svg/btnCircle.svg'));
// import PromoLines from './PromoLines';
// import btnCircle from '../assets/images/svg/btnCircle.svg'
// import ContactsModal from './ContactsModal';

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
      <div className="gradientWorthy">
        <div className="promo-second">
          <Suspense fallback={'loading'}>
            <PromoLines />
          </Suspense>
        </div>
        <div className="container">
        <h3 className="h3">{worthyData.worthyTitle}</h3>
          <div className="wrap">
            <div className="title-ending ">
              <span className="small-text">{worthyData.worthySmallText}</span>  <span className="h3 margin">{worthyData.worthyTitleContinue}</span>
              <span>
                <button type="button" className="btn btn-circle" onClick={openModal}>
                  <Suspense fallback={'loading'}>
                    <img src={btnCircle} alt={worthyData.worthyBtnAlt} />
                  </Suspense>
                </button>
              </span>
              <span className="h3">{worthyData.worhtyTitleEnd}</span>
            </div>
            <div className="around-title small-text">
              {worthyData.worthySmallTextTwo}
            </div>
            <Suspense fallback={'loading'}>
              <ContactsModal isOpen={modalOpen} onClose={closeModal} />
            </Suspense>
          </div>
      </div>
      </div>
      <div className="container">
        <div className="worthy-grid">
          <div className="empty">
            <Link to={worthyData.worthyLinkTo} className="small-link" title={worthyData.worthyLinkTitle} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">
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