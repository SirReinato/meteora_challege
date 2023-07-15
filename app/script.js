const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

// Now you can use all slider methods like
swiper.slideNext();

// MODAL ______________________________________
// A modal em si
const modal = document.querySelector(".modal");
const abriModealBtn = document.querySelector(".open");
const fecharModalBtn = document.querySelectorAll(".close");

/* Ao clicar no botão de Abrir Modal, executamos a função
showModal() na Modal: */
abriModealBtn.addEventListener("click", (event) => {
  event.preventDefault();
  modal.showModal();
});
/* Ao clicar no botão de Fechar Modal, executamos a função
close() na Modal */
fecharModalBtn.forEach((fechar) => {
  fechar.addEventListener("click", (event) => {
    event.preventDefault();
    modal.close();
  });
});

// newls modal ____________________________________
const modalNewsl = document.querySelector(".modal-newls");
const btnNewsl = document.querySelector(".btn-news");
const btnNewlsFechar = document.querySelector(".fechar");

// abrir modal
btnNewsl.addEventListener("click", (event) => {
  event.preventDefault();
  modalNewsl.classList.toggle("deuBom");
  modalNewsl.showModal();
  setTimeout(() => {
    modalNewsl.close();
    modalNewsl.classList.remove("deuBom");
  }, 1500);
});
// fechar modal
btnNewlsFechar.addEventListener("click", () => modalNewsl.close());
