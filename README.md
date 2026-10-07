# RutaDenuncia

Plataforma web informativa que orienta sobre cómo realizar correctamente una denuncia según el tipo de situación.
Proyecto del curso Programación Web (Universidad Continental) – avance Semana 08.

## Estado
- Frontend estático navegable: inicio con categorías y buscador, guía por proceso y formulario de sugerencias con validaciones.
- Datos de ejemplo en `js/datos.js`. Las guías marcadas como pendientes deben validarse con fuentes oficiales.
- Backend (Laravel + MySQL), autenticación y panel admin: planificados para las semanas 10 a 12.

## Cómo ejecutarlo
Abre `index.html` en el navegador o usa la extensión Live Server de VS Code.

## Estructura
- `index.html`, `proceso.html`, `sugerencias.html`
- `css/` variables, base y componentes
- `js/` datos, buscador, proceso y validaciones
- `docs/` informe, diagramas y wireframes

## Accesibilidad y seguridad
HTML semántico, enlace para saltar al contenido, etiquetas asociadas, foco visible y contraste suficiente.
El contenido dinámico se inserta con `textContent` para evitar XSS.

## Convención de commits
`feat:`, `fix:`, `docs:`, `style:` + mensaje claro. Una rama por funcionalidad.

## Integrantes
- [Nombre – Código]

## Licencia
[Elegir, por ejemplo MIT]
