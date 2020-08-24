import React from 'react';

function ImagePopup({ card, isOpen, onClose }) {
  return(
    <div className={(isOpen ? `popup popup_picture-zoom popup_background-color-dark popup_opened` : `popup popup_picture-zoom popup_background-color-dark`)}>
      <div className="popup__picture">
        <img className="popup__picture-zoom" src={card.link} alt={card.name}/>
        <p className="popup__picture-text">{card.name}</p>
        <button className="popup__close-button popup_close-picture-zoom" type="button" onClick={onClose}/>
      </div>
    </div>
  )
}

export default ImagePopup;
