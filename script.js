'use strict';

const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(closeBtn);
console.log(btnOpenModal);

const closeModalBtn = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const removeClass = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', removeClass);
}

closeBtn.addEventListener('click', closeModalBtn);

overlay.addEventListener('click', closeModalBtn);
