import React from 'react';

function PopupWithForm({ children, name, title, isOpen, onClose, onSubmit }) {
  return(
    <div className={(isOpen ? `popup ${name} popup_opened` : `popup ${name}`)}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={onClose}/>
        <form className="popup__form" name={name} onSubmit={onSubmit} noValidate>
          <h2 className="popup__head">{title}</h2>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;