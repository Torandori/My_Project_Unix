import ContactForm from "./ContactForm";
import "../assets/scss/_contactsModal.scss"
import '../assets/scss/contacts.scss'
import modalData from "../data/modalData.json"

function ContactsModal({ isOpen, onClose, prop}) {
  if (!isOpen) return null;
  // console.log(prop)
  // const modalD = modalData.modalTitle
  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  // const modalTitle = heading.careerText;
  // const modalDefaultTitle = modalData.modalTitle

  return (
    <div className="modal-shadow" onClick={onClose}>
      <div className="modal" onClick={handleContentClick}>
        <button className="modal-close" onClick={onClose}></button>
        <div className="modal-content">
          <div className="h2">{prop ? prop : modalData.modalTitle}</div>
            {prop && <div>Your drop</div>}
            <ContactForm /> 
        </div>
      </div>
    </div>
  );
}
export default ContactsModal;