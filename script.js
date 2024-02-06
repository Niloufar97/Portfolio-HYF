const openOffcanvasButton = document.getElementById("openOffcanvas");
const offcanvas = document.getElementById("offcanvas");
openOffcanvasButton.addEventListener("click", function () {
  offcanvas.style.right = offcanvas.style.right === "0" ? "-100%" : "0";
});

const closeOffcanvas = () => {
  offcanvas.style.right = "-100%";
};
const closeOffcanvasButton = document.getElementById("closeOffcanvas");
closeOffcanvasButton.addEventListener("click", closeOffcanvas);