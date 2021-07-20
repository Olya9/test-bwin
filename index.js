const playBtn = document.querySelector(".bwin__play-btn");
const popup = document.querySelector(".container-popup");
const closePopupBtn = popup.querySelector(".popup__close-icon");
const openPopupBtn = document.querySelector(".bwin__conditions");

const play = () => console.log("Button clicked");
const openPopup = () => popup.classList.add("popup_active");
const closePopup = () => popup.classList.remove("popup_active");

playBtn.addEventListener("click", play);
openPopupBtn.addEventListener("click", openPopup);
closePopupBtn.addEventListener("click", closePopup);
