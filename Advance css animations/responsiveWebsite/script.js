let menubar = document.querySelector(".menu-bars");
let navbar = document.querySelector(".navbar");

menubar.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
