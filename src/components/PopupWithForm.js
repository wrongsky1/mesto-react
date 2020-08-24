import React from 'react';

function PopupWithForm(props) {
  return(
    <div className={(props.isOpen ? `popup ${props.name} popup_opened` : `popup ${props.name}`)}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose}/>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit} noValidate>
          <h2 className="popup__head">{props.title}</h2>
          {props.children}
        </form>
        
      </div>
    </div>
  );
}

export default PopupWithForm;