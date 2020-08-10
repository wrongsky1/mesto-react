import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card.name, props.card.link);
  }

  return(
    <div className="element" key={props.card._id}>
      <img className="element__picture" alt={props.card.name} src={props.card.link} onClick={handleCardClick}/>
      <p className="element__description">{props.card.name}</p>
      <div className="element__like-container">
        <button className="element__like-button" type="button"/>
        <span className="elements__like-counter">{props.card.likes.length}</span>
      </div>
      <button className="element__close-button" type="button" onClick={props.onCardDelete}/>
    </div>
  )
}

export default Card;