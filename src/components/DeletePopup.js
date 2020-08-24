import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeletePopup({ card, isOpen, onClose, onDelete }) {
    return (
        <PopupWithForm
            isOpen={isOpen}
            onClose={onClose}
            name='popup-delete'
            title='Вы уверены?'
        >  
            <button
                type="button"
                onClick={() => onDelete(card)}
                className="popup__save-button"
            >
            Да
            </button>
        </PopupWithForm>
    )
}

export default DeletePopup
