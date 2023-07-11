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

const btn = document.querySelector(".menu__button");
console.log(btn);
btn.addEventListener("click", funcaoMenuHamburgue);

function funcaoMenuHamburgue(event) {
  event.preventDefault()
  const menuNav = document.querySelector(".menu__nav");
  menuNav.classList.toggle("menu-active");

  btn.textContent === "☰"
    ? (btn.textContent = "☓")
    : (btn.textContent = "☰");
}


// MODAL ______________________________________
// A modal em si
const modal = document.querySelector(".modal");
const abriModealBtn = document.querySelector(".open");
const fecharModalBtn = document.querySelector(".close");

/* Ao clicar no botão de Abrir Modal, executamos a função
showModal() na Modal: */

// setTimeout(() =>{
//   modal.showModal();
// }, '3000');

abriModealBtn.addEventListener("click", () => modal.showModal());
/* Ao clicar no botão de Fechar Modal, executamos a função
close() na Modal */
fecharModalBtn.addEventListener("click", () => modal.close());
