import { useState } from 'react'
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import ContactsModal from './ContactsModal';
import btnCircle from '../assets/images/svg/btnCircle.svg'
import Flake from './svgComponents/Flake'
import '../assets/scss/about.scss'
import '../assets/scss/contacts.scss'



function HeroSec(props){
  const isMobile = useMediaQuery({ maxWidth: 880 });
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
      {isMobile ? (
        <h1 className="panchang" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{heroD.heroTitle}<span className="shot">{heroD.underCase}</span></h1>
      ) : (
        <Parallax translateX={['180px', '-200px']}>
          <h1 className="panchang" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{heroD.heroTitle}<span className="shot">{heroD.underCase}</span></h1>
        </Parallax>
      )}
        <div className="flake dark" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300">
          <Parallax rotate={['0', '360']}>
            <Flake />
          </Parallax>
        </div>

        <div className="under" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">
          <div className="under-title panchang">{heroD.underTitle}</div>
        </div>
        <p data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">{heroD.heroDescr}</p>
        <div className="hero-wrap">
          <div className="wrap-item" data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="500">
            <div>{heroD.heroAsk}</div>
            <a href="mailto:Hello@unixstudio.agency" title="Send an email to us">{heroD.heroEmail}</a>
          </div>
        <div className="wrap-item" data-aos="slide-up" data-aos-easing="ease-out-cubic" data-aos-duration="500">
          <div>{heroD.heroAction}</div>
          <a href="mailto:hello@unixstudio.agency" title="Send an email to us">{heroD.heroEmailSecond}</a>
        </div>
      </div>


        <button type="button" className="btn btn-circle" onClick={openModal} aria-label="Open contact form" title="Contact us">
          <img src={btnCircle} alt="Open contact form" />
        </button>
      </div>
        <ContactsModal isOpen={modalOpen} onClose={closeModal} />
    </section>
  )
}

export default HeroSec;

