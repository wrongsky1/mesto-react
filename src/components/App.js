import React from 'react';
import api from '../utils/api'
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup'
import ImagePopup from './ImagePopup.js';
import DeletePopup from './DeletePopup';
import CurrentUserContext from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isPopupProfileOpen, setIsPopupProfileOpen] = React.useState(false);
  const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false);
  const [isPopupAvatarEditOpen, setIsPopupAvatarEditOpen] = React.useState(false);
  const [isPopupCardDeleteOpen, setIsPopupCardDeleteOpen] = React.useState({ card: {}, isOpen: false });
  const [selectedCard, setSelectedCard] = React.useState({ card: {}, isOpen: false });

function handleError (error) {
  console.error(error);
}

React.useEffect(() => {
  Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([user, cardsFromServer]) => {
      setCurrentUser(user)
      setCards(cardsFromServer)
    })
    .catch(handleError)
  }, []);

function handleEditProfileClick() {
  setIsPopupProfileOpen(true);
}

function handleAddPlaceClick() {
  setIsPopupAddPlaceOpen(true);
}

function handleEditAvatarClick() {
  setIsPopupAvatarEditOpen(true);
}

function handleCardClick(name, link) {
  setSelectedCard({ card, isOpen: true });
}

function closeAllPopups() {
  setIsPopupProfileOpen(false);
  setIsPopupAddPlaceOpen(false);
  setIsPopupAvatarEditOpen(false);
  setIsPopupCardDeleteOpen({ card: {}, isOpen: false });
  setSelectedCard({ ...selectedCard, isOpen: false })
}

function handleSetCards (updatedCards) {
  setCards(updatedCards);
}

function handleUpdateUser ({ name, about }) {
  api.setUserInfo({ name, about })
    .then(() => {
      setCurrentUser({ ...currentUser, name, about });
      setIsPopupProfileOpen(false);
    })
    .catch(handleError)
}

function handleUpdateAvatar ({ avatar }) {
  api.changeAvatar(avatar)
    .then(() => {
      setCurrentUser({ ...currentUser, avatar });
      setIsPopupAvatarEditOpen(false);
    })
    .catch(handleError)
}

function handleCardLike (card) {
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  function handleResponseCardLike (newCard) {
    const newCards = cards.map((c) => c._id === card._id ? newCard : c);
    setCards(newCards);
  }

  if (!isLiked) {
    api.setLike(card._id)
      .then(handleResponseCardLike)
      .catch(handleError)
  } else {
    api.deleteLike(card._id)
      .then(handleResponseCardLike)
      .catch(handleError)
  }
}

function handleRequestDelete (card) {
  setIsPopupCardDeleteOpen({ card, isOpen: true })
}

function handleCardDelete (card) {
  api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter(el => el._id !== card._id);
      setCards(newCards);
      setIsPopupCardDeleteOpen({ card: {}, isOpen: false });
    })
    .catch(handleError)
}

function handleAddPlaceSubmit (card) { //проверить данные
  api.setCard(card)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      setIsPopupAddPlaceOpen(false);
    })
    .catch(handleError)
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
      <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick} 
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onSetCards={handleSetCards}
        onCardLike={handleCardLike}
        onCardDelete={handleRequestDelete}
        cards={cards}
      />
      <Footer />

      <EditAvatarPopup
        isOpen={isPopupAvatarEditOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />

      <EditProfilePopup
        isOpen={isPopupProfileOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <AddPlacePopup
        isOpen={isPopupAddPlaceOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

      <ImagePopup
        card={selectedCard.card}
        isOpen={selectedCard.isOpen}
        onClose={closeAllPopups}
      />

      <DeletePopup
        card={isPopupCardDeleteOpen.card}
        isOpen={isPopupCardDeleteOpen.isOpen}
        onClose={closeAllPopups}
        onDelete={handleCardDelete}
      />
      </CurrentUserContext.Provider>
    </div>
  </div>  
  </div>
);
}          

export default App;