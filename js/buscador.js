/** Renderiza categorías y tarjetas en index.html y filtra por texto. */
const contenedor = document.getElementById("categorias");
const vacio = document.getElementById("sin-resultados");
const formBuscar = document.getElementById("form-buscar");
const campoBuscar = document.getElementById("q");

/** Quita tildes y pasa a minúsculas para comparar. */
const normalizar = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/** Crea la tarjeta de un proceso usando textContent (evita XSS). */
function crearTarjeta(p) {
  const li = document.createElement("li");
  li.className = "tarjeta";
  const info = document.createElement("div");
  const h3 = document.createElement("h3"); h3.textContent = p.titulo;
  const sub = document.createElement("p"); sub.textContent = p.entidad;
  info.append(h3, sub);
  const a = document.createElement("a");
  a.className = "btn btn-suave"; a.href = "proceso.html?id=" + encodeURIComponent(p.id);
  a.textContent = "Ver guía";
  a.setAttribute("aria-label", "Ver guía: " + p.titulo);
  li.append(info, a);
  return li;
}

/** Dibuja los grupos que tengan procesos que coincidan con el texto. */
function mostrar(texto = "") {
  const q = normalizar(texto.trim());
  contenedor.replaceChildren();
  let total = 0;
  DATOS.categorias.forEach(cat => {
    const lista = cat.procesos.filter(p => normalizar(p.titulo + " " + p.entidad).includes(q));
    if (!lista.length) return;
    total += lista.length;
    const sec = document.createElement("section");
    sec.className = "grupo"; sec.setAttribute("aria-labelledby", "cat-" + cat.id);
    const cab = document.createElement("div"); cab.className = "grupo-cabecera";
    const h2 = document.createElement("h2"); h2.id = "cat-" + cat.id; h2.textContent = cat.nombre;
    const n = document.createElement("span"); n.className = "cantidad";
    n.textContent = lista.length + (lista.length === 1 ? " guía" : " guías");
    cab.append(h2, n);
    const ul = document.createElement("ul"); ul.className = "grid-tarjetas";
    lista.forEach(p => ul.append(crearTarjeta(p)));
    sec.append(cab, ul); contenedor.append(sec);
  });
  vacio.hidden = total !== 0;
}

formBuscar.addEventListener("submit", e => { e.preventDefault(); mostrar(campoBuscar.value); });
campoBuscar.addEventListener("input", () => mostrar(campoBuscar.value));
mostrar();
