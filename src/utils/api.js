class Api {
    constructor({ baseUrl, ownId, headers = {} }) {
      this.baseUrl = baseUrl;
      this.ownId = ownId;
      this.headers = headers;
    }
  
    _checkResponse(res){
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }
  
    _checkResponseError(err){
      return Promise.reject(err.message);
    }

    getUserInfo() {
      return fetch(
        `${this.baseUrl}/users/me`,
        {
          headers: this.headers
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  
    setUserInfo(userInfo) {
      return fetch(
        `${this.baseUrl}/users/me`,
        {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            name: userInfo.name,
            about: userInfo.job 
          })
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  
    changeAvatar(avatar) {
      return fetch(
        `${this.baseUrl}/users/me/avatar`,
        {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            avatar: avatar.link
          })
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  
    getInitialCards() {
      return fetch(
        `${this.baseUrl}/cards`,
        {
          headers: this.headers
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  
    setCard(card) {
      return fetch(
        `${this.baseUrl}/cards`,
        {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            name: card.title,
            link: card.link
          })
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  
    setLike(id) {
      return fetch(
        `${this.baseUrl}/cards/likes/${id}`,
        {
          method: 'PUT',
          headers: this.headers
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  
    deleteLike(id) {
      return fetch(
        `${this.baseUrl}/cards/likes/${id}`,
        {
          method: 'DELETE',
          headers: this.headers
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  
    deleteCard(id) {
      return fetch(
        `${this.baseUrl}/cards/${id}`,
        {
          method: 'DELETE',
          headers: this.headers
        }
      )
      .then(this._checkResponse)
      .catch(this._checkResponseError)
    }
  }

  const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-13',
    ownId: '993c8682f39a3e6b3e598d71',
    headers: {
      authorization: 'c0f1ac49-a1c2-4501-916f-6ad383af4504',
       'Content-Type': 'application/json'
    }
  });

  export default api;
