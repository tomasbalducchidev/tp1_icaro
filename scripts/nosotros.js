const brightMode = document.getElementById("brightMode");
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", () => {
  nosotros.classList.remove("showed");
  nosotros.classList.add("hidden");
  nosotrosb.classList.add("showed");
});

brightMode.addEventListener("click", () => {
  nosotrosb.classList.remove("showed");
  nosotros.classList.add("showed");
});
