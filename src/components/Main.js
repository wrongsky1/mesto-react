import React from 'react';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return(
    <>
      <section className="profile">
        <img 
          className="profile__avatar" 
          src={currentUser.avatar} 
          alt={`Аватарка ${currentUser.name}`}
        />
        <button 
          className="profile__edit-pen" 
          type="button" 
          onClick={onEditAvatar} 
          title="Сменить аватар"
        />
        <h1 className="profile__info-name">{currentUser.name}</h1>
        <button 
          className="profile__edit-button" 
          type="button" 
          onClick={onEditProfile} 
          title="Редактировать профиль"
        />
        <p className="profile__info-job">{currentUser.about}</p>
        <button 
          className="profile__add-button" 
          type="button" 
          onClick={onAddPlace} 
          title="Добавить место"
        />
      </section>

      <section className="elements">
        {cards.map((card) => 
          <Card 
            key={card._id} 
            card={card} 
            onCardLike={onCardLike} 
            onCardDelete={onCardDelete} 
            onCardClick={onCardClick}
          />)}
      </section>
    </>
  );
}

export default Main;