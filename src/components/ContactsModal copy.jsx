import ContactForm from "./ContactForm";
import "../assets/scss/_contactsModal.scss"
import '../assets/scss/contacts.scss'
import modalData from "../data/modalData.json"

function ContactsModal({ isOpen, onClose}) {
  if (!isOpen) return null;

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
          <div className="h2">{modalData.modalTitle}</div>
            <ContactForm /> 
        </div>
      </div>
    </div>
  );
}
export default ContactsModal;