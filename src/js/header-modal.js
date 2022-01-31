(() => {
  const refs = {
    openModalBtn: document.querySelector('[header-modal-open]'),
    closeModalBtn: document.querySelector('[header-modal-close]'),
    closeModalBtn1: document.querySelector('[header-modal-close1]'),
    closeModalBtn2: document.querySelector('[header-modal-close2]'),
    closeModalBtn3: document.querySelector('[header-modal-close3]'),
    closeModalBtn4: document.querySelector('[header-modal-close4]'),
    modal: document.querySelector('[header-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn3.addEventListener('click', toggleModal);
  refs.closeModalBtn4.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

