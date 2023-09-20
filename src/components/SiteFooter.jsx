import { Link } from 'react-router-dom'
import { useState } from 'react'
import FooterSocLinks from './FooterSocLinks'
import btnCircleLight from '../assets/images/svg/btnCircleLight.svg'
import footerPic from '../assets/images/footer-pic1.jpg'
import footerData from '../data/footerData.json'
import '../assets/scss/_footer.scss'
import ContactsModal from './ContactsModal';
import FooterBtnBec from './FooterBtnBec'

function SiteFooter() {
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
    <footer id="footer">
      <div className="container">
        <div className="footer-flex">
          <div className="left-col">
            <div className="soc-media">
              <FooterSocLinks />
            </div>
            <div className="footer-title">
              <div className="small-text">{footerData.footerSubTitle}</div>
              <div className="h4">{footerData.footerLocation}</div>
            </div>
            <div className="footer-contact">
              <div className="small-text">{footerData.footerSmallText}</div>
              <Link to="mailto: Hello@unixstudio.agency" title="Email us" >{footerData.footerEmail}</Link>
            </div>
            <FooterBtnBec />
            <p className="copy">{footerData.footerCopy}</p>
            <button type="button" className="btn btn-circle" onClick={openModal}>
              <img src={btnCircleLight} alt="Contact us" />
            </button>
          </div>
          <div className="right-col">
          </div>
        </div>
      </div>
      <img className="footer-pic" src={footerPic} alt="Team picture"/>
      <ContactsModal isOpen={modalOpen} onClose={closeModal} />
    </footer>
  )
}
export default SiteFooter;