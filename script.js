const modal = document.querySelector('.popup');
const modalContainer = document.querySelector('.popup-container');
const button = document.querySelector('.content__button-container');
const close = document.querySelector('.popup__close');

function openModal(e) {
  e.preventDefault();
  modalContainer.style.display = 'block';
}

function closeModal() {
  modal.classList.add('slide-up');

  setTimeout(() => {
    modalContainer.style.display = 'none';
    modal.classList.remove('slide-up');
  }, 500);
}

button.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
modalContainer.addEventListener('click', closeModal);
