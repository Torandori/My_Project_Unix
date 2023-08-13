import { useState } from "react";
import Arrow from "./svgComponents/Arrow";
import career from "../data/contCareerSecData.json"
import ContactsModal from "./ContactsModal";

function ContCareerSec() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
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
            {career.map((item, index) => {
              console.log(item.id)
              return (
                <>
                  {/* {(item.id === "project")  || (item.id === "career") 
                    ? <ContactsModal isOpen={modalOpen} onClose={closeModal} heading={career} /> 
                    : <ContactsModal isOpen={modalOpen} onClose={closeModal} />
                  } */}
                  <button type="button" className={item.careerClass} key={index} onClick={openModal}>
                    <span className="btn-content">
                      <span className="arrow-in">
                        <Arrow />
                      </span>
                      <span className="btn-text">{item.careerText}</span>
                    </span>
                  </button>
                </>
              )
            })}

          </div>
          <div className="location">
            <div className="where panchang">in new york, usa</div>
            <div className="descr">our location</div>
          </div>
        </div>
        <ContactsModal isOpen={modalOpen} onClose={closeModal} />
      </div>
    </section>
  )
}
export default ContCareerSec;