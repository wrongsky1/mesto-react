import React from 'react'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
    
  function handleSubmit (e) {
    e.preventDefault()
    onUpdateUser({ name, about: description })
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name='profile'
      title='Редактировать профиль'
    >
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
        autoComplete="none"
        className="popup__input popup__input-name"
        type="text"
        placeholder="Введите имя"
        id="profile-name"
        name="name"
        minLength="2"
        maxLength="40"
        required 
      />
      <span id="profile-name-error" className="popup__error_visible"/>

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="popup__input popup__input-job"
        type="text"
        placeholder="Какова твоя профессия?"
        id="profile-job"
        name="job"
        minLength="2"
        maxLength="200"
        required
      />
      <span id="profile-job-error" className="popup__error_visible"/>
            
      <button
        type="submit"
        className="popup__save-button"
      >
      Сохранить
      </button>
    </PopupWithForm>
  )
}

export default EditProfilePopup
