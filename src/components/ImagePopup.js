import React from 'react';

function ImagePopup(props) {
    return(
        <div className={(props.card.isOpen ? `popup popup_picture-zoom popup_background-color-dark popup_opened` : `popup popup_picture-zoom popup_background-color-dark`)}>
            <div className="popup__picture">
                <img className="popup__picture-zoom" alt={props.card.name} src={props.card.link}/>
                <p className="popup__picture-text">{props.card.name}</p>
                <button className="popup__close-button popup_close-picture-zoom" type="button" onClick={props.onClose}/>
            </div>
        </div>
    )
}

export default ImagePopup;
