import { useState } from "react";
import Arrow from "./svgComponents/Arrow";
import career from "../data/contCareerSecData.json"
import ContactsModal from "./ContactsModal";

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
                      <Arrow />
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