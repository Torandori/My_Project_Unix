import { useState, useEffect } from 'react';
import btnCircle from '../assets/images/svg/btnCircle.svg'
import { Link } from 'react-router-dom'
import worthyData from '../data/mainWorthySecData.json'
import PromoLines from './PromoLines';
import ContactsModal from './ContactsModal';

function MainWorthySec() {
  const [worthyItems, setWorthyItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    fetch('./pubdata/mainWorthyItems.json')
    .then(resp => resp.json())
    .then(resp => {
      setWorthyItems(resp);
    })
  }, []);

  return (
    <section id="we-worthy-sec">
      <div className="promo-second">
        <PromoLines />
      </div>
      <div className="container">
        <h3 className="h3">{worthyData.worthyTitle}</h3>
        <div className="wrap">
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
            <Link to={worthyData.worthyLinkTo} className="small-link" title={worthyData.worthyLinkTitle}>{worthyData.worthyLinkName}</Link>
          </div>
          <div className="border"></div>
          <div className="nocontent"></div>
          <div className="nocontent"></div>

          {worthyItems.map((item, index) => {
            return (
              <div className={item.worthyItemClass} key={index} >
                <p>{item.worthyItemText}</p>
                <div>{item.worthyItemCount}</div>
                <Link to={item.worthyItemLinkTo} title={item.worthyItemLinkTitle}>{item.worthyItemLinkText}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MainWorthySec;