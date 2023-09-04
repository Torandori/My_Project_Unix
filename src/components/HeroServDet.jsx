import { useState } from 'react';
import ContactsModal from './ContactsModal';
import btnCircle from '../assets/images/svg/btnCircle.svg';
import Flake from './svgComponents/Flake';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';


function HeroServDet({descr}){
  const isMobile = useMediaQuery({ maxWidth: 880 });

  const heroServ = descr.heroServ;
  console.log(descr);

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
        <h1 className="panchang" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{heroServ.heroServTitle}</h1>
      ) : (
        <Parallax translateX={['180px', '-200px']}>
          <h1 className="panchang" data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="500">{heroServ.heroServTitle}</h1>
        </Parallax>
      )}
        <div className="flake dark" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500" data-aos-delay="300">
          <Parallax rotate={['0', '360']}>
            <Flake />
          </Parallax>
        </div>
        <p data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="500">{heroServ.heroServText}</p>
        <button type="button" className="btn btn-circle" onClick={openModal} aria-label="Open contact form" title="Contact us">
          <img src={btnCircle} alt="Contact us" />
        </button>
      </div>
      <ContactsModal isOpen={modalOpen} onClose={closeModal} />
    </section>
  )
}

export default HeroServDet;