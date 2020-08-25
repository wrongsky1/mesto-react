import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();
    
  function handleSubmit (e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value
    });
    inputRef.current.value = ''
  }

  return (
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        name='popup-avatar'
        title='Обновить аватар'
      >
        <input
          id="avatar-edit-link"
          className="popup__input popup__input-avatar-edit"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
          ref={inputRef}
        />
        <span id="avatar-edit-link-error" className="popup__error_visible"/>
            
        <button
          type="submit"
          className="popup__save-button"
        >
        Сохранить
        </button>
      </PopupWithForm>
  )
}

export default EditAvatarPopup
