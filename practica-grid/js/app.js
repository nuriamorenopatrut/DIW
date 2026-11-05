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


const root = document.documentElement;
      const estado = document.getElementById("estado");
      const oscuroSistema = matchMedia("(prefers-color-scheme: dark)");
      function temaActual() {
        return root.dataset.theme || (oscuroSistema.matches ? "dark" : "light");
      }
      const botones = document.querySelectorAll(".selector button");
      function pintar() {
        const elegido = root.dataset.theme || "system";
        const modo = root.dataset.theme ? "elegido por ti" : "del sistema";
        estado.textContent =
          (temaActual() === "dark" ? "oscuro" : "claro") + " (" + modo + ")";
        botones.forEach((b) =>
          b.setAttribute("aria-pressed", String(b.dataset.tema === elegido)),
        );
      }
      botones.forEach((b) =>
        b.addEventListener("click", () => {
          const t = b.dataset.tema;
          if (t === "system") {
            delete root.dataset.theme;
            try {
              localStorage.removeItem("tema");
            } catch (e) {}
          } else {
            root.dataset.theme = t;
            try {
              localStorage.setItem("tema", t);
            } catch (e) {}
          }
          pintar();
        }),
      );
      oscuroSistema.addEventListener("change", pintar);
      pintar();