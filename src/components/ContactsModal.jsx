// import { ReactDOM } from 'react';
import { createPortal } from 'react-dom';
import ContactForm from "./ContactForm";
import "../assets/scss/_contactsModal.scss"
import '../assets/scss/contacts.scss'
import modalData from "../data/modalData.json"

function ContactsModal({ isOpen, onClose, prop}) {
  const portal = document.getElementById('portal');

  if (!isOpen) return null;
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    createPortal(
      <div className="modal-shadow" onClick={onClose}>
        <div className="modal" onClick={handleContentClick}>
          <button className="modal-close" onClick={onClose}></button>
          <div className="modal-content">
            <div className="h2">{prop ? prop : modalData.modalTitle}</div>
            <ContactForm title={prop}/> 
          </div>
        </div>
      </div>,
      portal
    )
  );
}
export default ContactsModal;