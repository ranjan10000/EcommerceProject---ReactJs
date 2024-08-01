import React from 'react';
import './css/Modal.css'; // Import CSS for modal styling

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
