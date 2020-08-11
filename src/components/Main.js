import React from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {
  const[userName, setUserName] = React.useState('');
  const[userDescription, setUserDescription] = React.useState('');
  const[userAvatar, setUserAvatar] = React.useState('');
  const[cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
    api.getInitialCards()
      .then((items) => {
      setCards(items);   
      })
  }, []);

  return(
    <>
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="Аватарка"/>
        <div className="profile__edit-pen" onClick={props.onEditAvatar}/>
        <h1 className="profile__info-name">{userName}</h1>
        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}/>
        <p className="profile__info-job">{userDescription}</p>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}/>
      </section>

      <section className="elements">
        {cards.map((card) => <Card key={card._id} card={card} onCardDelete={props.onCardDelete} onCardClick={props.onCardClick}/>)}
      </section>
    </>
  );
}

export default Main;