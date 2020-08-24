import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleSubmit (e) {
        e.preventDefault();
        onAddPlace({ name, link });
        setName('');
        setLink('');
      }

    return (
        <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        name='add-place'
        title='Новое место'
        >
            <input
              id="add-place-title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="popup__input popup__input-title"
              type="text"
              placeholder="Название"
              name="title"
              minLength="1"
              maxLength="30"
              required
            />
            <span id="add-place-title-error" className="popup__error_visible"/>
              
            <input
              id="add-place-link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="popup__input popup__input-link"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span id="add-place-link-error" className="popup__error_visible"/>

            <button 
              className="popup__save-button" 
              type="submit" 
              disabled
            >
            Сохранить
            </button>
          </PopupWithForm>     
    )
}

export default AddPlacePopup
