/** Muestra la guía de un proceso según el parámetro ?id= de la URL. */
const id = new URLSearchParams(location.search).get("id");
const proceso = DATOS.categorias.flatMap(c => c.procesos.map(p => ({ ...p, categoria: c.nombre }))).find(p => p.id === id);
const raiz = document.getElementById("contenido-guia");

/** Crea un elemento con texto seguro (textContent). */
function el(tag, texto, clase) { const e = document.createElement(tag); e.textContent = texto; if (clase) e.className = clase; return e; }

if (!proceso) {
  document.title = "Guía no encontrada · RutaDenuncia";
  const caja = el("div", "", "vacio");
  const a = el("a", "Volver al inicio", "btn"); a.href = "index.html";
  caja.append(el("h1", "No encontramos esa guía"), el("p", "Revisa el enlace o vuelve al inicio para buscarla por categoría."), a);
  raiz.append(caja);
} else {
  document.title = proceso.titulo + " · RutaDenuncia";
  document.getElementById("migas-categoria").textContent = proceso.categoria;
  document.getElementById("migas-proceso").textContent = proceso.titulo;
  raiz.append(el("h1", "Cómo denunciar: " + proceso.titulo.toLowerCase()));
  if (proceso.pendiente) {
    const caja = el("div", "", "vacio");
    caja.append(el("p", "Esta guía está en elaboración. Se publicará cuando esté validada con fuentes oficiales."));
    raiz.append(caja);
  } else {
    raiz.append(el("p", proceso.resumen));
    const cuerpo = el("div", "", "guia");
    const izq = document.createElement("div");
    const ol = el("ol", "", "pasos");
    proceso.pasos.forEach(p => ol.append(el("li", p)));
    izq.append(el("h2", "Pasos a seguir"), ol);
    const lat = el("aside", "", "lateral");
    lat.setAttribute("aria-label", "Requisitos y entidad");
    const ul = document.createElement("ul");
    proceso.requisitos.forEach(r => ul.append(el("li", r)));
    lat.append(el("h2", "Qué llevar"), ul, el("h2", "A dónde acudir"), el("p", proceso.entidad),
      el("p", "Fuente: " + proceso.fuente + ". Última revisión: " + proceso.revisado + ".", "aviso"));
    cuerpo.append(izq, lat); raiz.append(cuerpo);
  }
}
