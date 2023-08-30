import { useState } from 'react'
import btnCircle from '../assets/images/svg/btnCircle.svg'
import Flake from './svgComponents/Flake'
import '../assets/scss/about.scss'
import '../assets/scss/contacts.scss'
import ContactsModal from './ContactsModal';

function HeroSec(props){
  // const _heroData = heroData[0];
  const heroD = props.par;
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
    <section id="hero-sec">
      <div className="container separator">
        <h1 className="panchang">{heroD.heroTitle}<span className="shot">{heroD.underCase}</span></h1>
        <div className="flake dark">
          <Flake />
        </div>

        <div className="under">
          <div className="under-title panchang">{heroD.underTitle}</div>
        </div>
        <p>{heroD.heroDescr}</p>
        <div className="hero-wrap">
          <div className="wrap-item">
            <div>{heroD.heroAsk}</div>
            <a href="mailto:Hello@unixstudio.agency">{heroD.heroEmail}</a>
          </div>
        <div className="wrap-item">
          <div>{heroD.heroAction}</div>
          <a href="mailto:hello@unixstudio.agency">{heroD.heroEmailSecond}</a>
        </div>
      </div>


        <button type="button" className="btn btn-circle" onClick={openModal}>
          <img src={btnCircle}  />
        </button>
      </div>
        <ContactsModal isOpen={modalOpen} onClose={closeModal} />
    </section>
  )
}

export default HeroSec;

