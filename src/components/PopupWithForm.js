import React from 'react';

function PopupWithForm(props) {
  return(
    <div className={(props.isOpen ? `popup ${props.name} popup_opened` : `popup ${props.name}`)}>
      <div className="popup__container">
        <form className="popup__form" name={props.name} noValidate>
          <h2 className="popup__head">{props.title}</h2>
          {props.children}
          <button className="popup__save-button" type="submit" disabled>Сохранить</button>
        </form>
        <button className="popup__close-button" type="button" onClick={props.onClose}/>
      </div>
    </div>
  );
}

export default PopupWithForm;