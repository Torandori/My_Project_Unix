import { useState } from "react";
import { lazy, Suspense } from 'react';
const Arrow  = lazy(() => import('./svgComponents/Arrow'));
// const ContactsModal  = lazy(() => import('./ContactsModal'));
import ArrowCareer from "./svgComponents/Arrow";
import ContactsModal from "./ContactsModal";
import career from "../data/contCareerSecData.json";
import Loader from "../components/Loader";

function ContCareerSec() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalTitle, setModalTitle] = useState('')

  const openModal = (title) => {
    setModalTitle(title)
    setModalOpen(true)
    document.body.classList.add('open-modal')
  }
  const closeModal = () => {
    setModalOpen(false)
    document.body.classList.remove('open-modal')
  }

  return (
    <section id="project-career-sec">
      <div className="container">
        <div className="wrap-poject-career">
          <div className="wrap-buttons">
            {career.map((item) => {
              return (
                <button type="button" className={item.careerClass} key ={item.id} onClick={() => openModal(item.careerText)}>
                  <span className="btn-content">
                    <span className="arrow-in">
                    <Suspense fallback={<Loader />}>
                      <ArrowCareer />
                    </Suspense>
                    </span>
                    <span className="btn-text">{item.careerText}</span>
                  </span>
                </button>
              )
            })}

          {modalOpen && <ContactsModal isOpen={modalOpen} onClose={closeModal} prop={modalTitle} />}
          </div>
          <div className="location">
            <div className="where panchang">in new york, usa</div>
            <div className="descr">our location</div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContCareerSec;