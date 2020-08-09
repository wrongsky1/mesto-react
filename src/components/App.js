import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isPopupProfileOpen, setIsPopupProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isPopupAvatarEditOpen, setIsPopupAvatarEditOpen] = React.useState(false);
  const [isPopupCardDeleteOpen, setIsPopupCardDeleteOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    isOpen: false,
    name: '',
    link: ''
})

function handleEditProfileClick() {
  setIsPopupProfileOpen(true);
}

function handleAddPlaceClick() {
  setIsPopupAddPlaceOpen(true);
}

function handleEditAvatarClick() {
  setIsPopupAvatarEditOpen(true);
}

function handleDeletePlaceClick() {
  setIsPopupCardDeleteOpen(true);
}

function handleCardClick(name, link) {
  setSelectedCard({
    isOpen: true,
    name: name,
    link: link
  })
}

function closeAllPopups() {
  setIsPopupProfileOpen(false);
  setIsPopupAddPlaceOpen(false);
  setIsPopupAvatarEditOpen(false);
  setIsPopupCardDeleteOpen(false);
  setSelectedCard({
    isOpen: false,
    name: '',
    link: ''
  })
}

function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    closeAllPopups();
  }
}

function handleOverlayClose(evt) {
  if (evt.target.classList.contains('popup')) {
    closeAllPopups();
  }
}

React.useEffect(() => {
  window.addEventListener('keydown', handleEscClose);
  window.addEventListener('mousedown', handleOverlayClose);

  return () => {
    window.removeEventListener('keydown', handleEscClose);
    window.removeEventListener('mousedown', handleOverlayClose);
  };
})


return (
  <div className="App">
    <div className="body">
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardDelete={handleDeletePlaceClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        isOpen={isPopupProfileOpen}
        onClose={closeAllPopups}
        name='profile'
        title='Редактировать профиль'
        children={
          <>
            <input pattern="^[A-Za-zА-Яа-яЁё\s\-]+$" autocomplete="none" className="popup__input popup__input-name" type="text" placeholder="Жак-ив Кусто" id="profile-name" name="name" minlength="2" maxlength="40" required />
            <span id="profile-name-error" className="popup__error_visible"/>

            <input className="popup__input popup__input-job" type="text" placeholder="Исследователь океана" id="profile-job" name="job" minlength="2" maxlength="200" required/>
            <span id="profile-job-error" className="popup__error_visible"/>
          </>
        }
      />

      <PopupWithForm
        isOpen={isPopupAddPlaceOpen}
        onClose={closeAllPopups}
        name='add-place'
        title='Новое место'
        children={
          <>
            <input id="add-place-title" className="popup__input popup__input-title" type="text" placeholder="Название" name="title" minlength="1" maxlength="30" required/>
            <span id="add-place-title-error" className="popup__error_visible"/>
              
            <input id="add-place-link" className="popup__input popup__input-link" type="url" placeholder="Ссылка на картинку" name="link" required/>
            <span id="add-place-link-error" className="popup__error_visible"/>
          </>
        }
      />  

      <PopupWithForm
        isOpen={isPopupAvatarEditOpen}
        onClose={closeAllPopups}
        name='popup-avatar'
        title='Обновить аватар'
        children={
          <>
            <input id="avatar-edit-link" className="popup__input popup__input-avatar-edit" type="url" placeholder="Ссылка на картинку" name="link" required/>
            <span id="avatar-edit-link-error" className="popup__error_visible"/>
          </>
        }
      />

      <PopupWithForm
        isOpen={isPopupCardDeleteOpen}
        onClose={closeAllPopups}
        name='popup-delete'
        title='Вы уверены?'
      />      

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  </div>  
  </div>
);
}          

export default App;