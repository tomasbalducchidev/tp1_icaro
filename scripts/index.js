const goTopBtn = document.getElementById("goTopBtn");

const testimoniales = document.getElementById("testimoniales");
const info = document.getElementById("info");

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
    testimoniales.classList.add("effect2");
  }
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 1.5
  )
    info.classList.add("effect2");
};
