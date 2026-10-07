/** Validación del formulario de sugerencias + guardado local (prototipo de CRUD). */
const form = document.getElementById("form-sugerencia");
const resultado = document.getElementById("resultado");
const REGEX_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Muestra u oculta el error de un campo. Devuelve true si el campo es válido. */
function marcar(campo, mensaje) {
  document.getElementById(campo.id + "-error").textContent = mensaje || "";
  campo.setAttribute("aria-invalid", mensaje ? "true" : "false");
  return !mensaje;
}

/**
 * Valida todos los campos del formulario.
 * @param {HTMLFormElement} f - formulario a validar
 * @returns {boolean} true si no hay errores
 */
function validar(f) {
  const mensaje = f.mensaje.value.trim(), correo = f.correo.value.trim();
  return [
    marcar(f.tipo, f.tipo.value ? "" : "Elige qué quieres hacer."),
    marcar(f.mensaje, mensaje.length < 10 ? "Escribe al menos 10 caracteres." : mensaje.length > 500 ? "Máximo 500 caracteres." : ""),
    marcar(f.correo, correo && !REGEX_CORREO.test(correo) ? "Escribe un correo válido, por ejemplo nombre@correo.com." : ""),
    marcar(f.acepto, f.acepto.checked ? "" : "Debes aceptar para enviar.")
  ].every(Boolean);
}

/** Guarda la sugerencia en localStorage (luego se reemplaza por una petición al backend). */
function guardar(f) {
  const lista = JSON.parse(localStorage.getItem("sugerencias") || "[]");
  lista.push({ id: Date.now(), tipo: f.tipo.value, mensaje: f.mensaje.value.trim(), correo: f.correo.value.trim(), fecha: new Date().toISOString() });
  localStorage.setItem("sugerencias", JSON.stringify(lista));
}

form.addEventListener("submit", e => {
  e.preventDefault();
  resultado.className = ""; resultado.textContent = "";
  if (!validar(form)) { form.querySelector('[aria-invalid="true"]').focus(); return; }
  guardar(form); form.reset();
  resultado.className = "exito"; resultado.textContent = "Sugerencia enviada. Gracias por ayudarnos a mejorar.";
});
form.addEventListener("input", e => { if (e.target.getAttribute("aria-invalid") === "true") validar(form); });
