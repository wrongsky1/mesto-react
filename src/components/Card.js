import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `element__close-button ${isOwn ? 'element__close-button_visible' : 'element__close-button_hidden'}`
  );

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like-button ${isLiked ? 'element__like-button_active' : null}`
  );

  return(
    <div className="element" key={props.card._id}>
      <img 
        className="element__picture"
        alt={props.card.name} 
        src={props.card.link} 
        onClick={() => onCardClick(card)}
      />
      <p className="element__description">{props.card.name}</p>
      <div className="element__like-container">
        <button 
          className={cardLikeButtonClassName} 
          type="button" 
          onClick={() => onCardLike(card)}
        />
        <span className="elements__like-counter">{props.card.likes.length}</span>
      </div>
      <button 
        className={cardDeleteButtonClassName} 
        type="button" 
        onClick={() => onCardDelete(card)}
      />
    </div>
  )
}

export default Card;