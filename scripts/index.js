const goTopBtn = document.getElementById("goTopBtn");

const productos = document.getElementById("productos");
const info = document.getElementById("info");
const oferta = document.getElementById("oferta");

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = () => {
  document.documentElement.scrollTop > document.documentElement.clientHeight &&
  document.documentElement.scrollTop !== 0
    ? (goTopBtn.style.display = "flex")
    : (goTopBtn.style.display = "none");

  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 0.5
  ) {
    productos.classList.add("effect2");
  }
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 1.1
  )
    info.classList.add("effect2");
};

oferta.addEventListener("click", () => {
  window.alert("Samsung Galaxy S21: $80.000,00");
});
//igual no está bueno que la info esté en el JS y deberia tener una imagen y un boton que te lleve a ver mas info del producto.
