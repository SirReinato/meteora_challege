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
fecharModalBtn.forEach(fechar => {
  fechar.addEventListener("click", (event) => {
    event.preventDefault();
    modal.close();
  });
})



