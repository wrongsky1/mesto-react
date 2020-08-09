export const options = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible' 
};
// кнопки
export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const avatarEditButton = document.querySelector('.profile__edit-pen');

// попапы
export const popupProfile = document.querySelector('.popup_profile');
export const popupAddPlace = document.querySelector('.popup_add-place');
export const popupPicture = document.querySelector('.popup_picture-zoom');
export const popupAvatarEdit = document.querySelector('.popup_avatar-edit');
export const popupDeleteCard = document.querySelector('.popup_card-delete');

// формы и инпуты
export const formProfile = document.querySelector('.popup_form-profile');
export const nameInput = document.querySelector('.popup__input-name');
export const jobInput = document.querySelector('.popup__input-job');

export const formAddPlace = document.querySelector('.popup_form-add-place');
export const inputTitleAddPlace = document.querySelector('.popup__input-title');
export const inputLinkAddPlace = document.querySelector('.popup__input-link');

export const formAvatarEdit = document.querySelector('.popup_form-avatar-edit');
export const inputLinkAvatar = document.querySelector('.popup__input-avatar-edit');

export const formDeleteCard = document.querySelector('.popup_form-card-delete');

// элементы профиля 
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileName = document.querySelector('.profile__info-name');
export const profileAbout = document.querySelector('.profile__info-job');

// элементы для открытия попапов и валидации 
export const openedPopup = document.querySelector('.popup_opened');
export const saveButtonProfile = document.querySelector('.popup__save-button_profile');
