import React from 'react';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
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
          onClick={props.onEditAvatar} 
          title="Сменить аватар"
        />
        <h1 className="profile__info-name">{currentUser.name}</h1>
        <button 
          className="profile__edit-button" 
          type="button" 
          onClick={props.onEditProfile} 
          title="Редактировать профиль"
        />
        <p className="profile__info-job">{currentUser.about}</p>
        <button 
          className="profile__add-button" 
          type="button" 
          onClick={props.onAddPlace} 
          title="Добавить место"
        />
      </section>

      <section className="elements">
        {cards.map((card) => 
          <Card 
            key={card._id} 
            card={card} 
            onCardLike={props.onCardLike} 
            onCardDelete={props.onCardDelete} 
            onCardClick={props.onCardClick}
          />)}
      </section>
    </>
  );
}

export default Main;