import React from "react";

function Modal({ currentPhoto, onClose }) {
  const { name, category, description, index } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <button type="button" onClick={onClose}>
          X
        </button>
        <h3 className="modalTitle">{name}</h3>
        <p>{description}</p>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt="current category"
        />
      </div>
    </div>
  );
}

export default Modal;
