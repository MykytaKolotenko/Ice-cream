(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-open-franchise]'),
    closeModalBtn: document.querySelector('[data-close-franchise]'),
    modal: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();