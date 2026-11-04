// Menú hamburguesa
// El botón se crea desde JS para no tocar el HTML
const nav = document.querySelector(".menu");
nav.id = "menu";

const toggle = document.createElement("button");
toggle.type = "button";
toggle.className = "menu__toggle";
toggle.textContent = "☰";
toggle.setAttribute("aria-label", "Abrir menú");
toggle.setAttribute("aria-expanded", "false");
toggle.setAttribute("aria-controls", "menu");
nav.before(toggle);

toggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("menu--abierto");
  toggle.textContent = abierto ? "✕" : "☰";
  toggle.setAttribute("aria-expanded", abierto);
  toggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});