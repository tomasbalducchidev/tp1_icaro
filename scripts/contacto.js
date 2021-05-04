const botonMuestra = document.getElementById("botonMuestra");

botonMuestra.addEventListener("click", () => {
  document.getElementById("formContacto").classList.add("showed");
  document.getElementById("botonMuestra").classList.add("hidden");
});
