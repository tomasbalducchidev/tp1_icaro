const botonVacia = document.getElementById("botonVacia");

botonVacia.addEventListener("click", () => {
  document.getElementById("articulos").value = "0";
  //   document.getElementById("formContacto").classList.add("showed");
  //   document.getElementById("botonMuestra").classList.add("hidden");
  document.getElementById("botonComprar").classList.add("hidden");
  document.getElementById("botonVacia").classList.add("hidden");
});
