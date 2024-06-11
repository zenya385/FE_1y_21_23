(() => {
    const refs = {
      openModalBtn: document.querySelector(".js-open-modal-menu"),
      closeModalBtn: document.querySelector(".js-close-modal-menu"),
      modal: document.querySelector(".js-modal-menu"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();
  