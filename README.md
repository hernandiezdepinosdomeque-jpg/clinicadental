# Clínica Dental Sonrisa · Web de demostración

Web de demostración de una **clínica dental ficticia** en Zaragoza.
Todos los datos marcados como **EJEMPLO** (teléfono, dirección, horario, equipo, textos…) son inventados y deben sustituirse antes de usarla con una clínica real.

No incluye reseñas, premios ni credenciales médicas, y **no recoge datos personales**: no hay formularios conectados.

---

## Qué hay en cada carpeta

```
index.html          → la página entera (todos los textos están aquí)
css/estilos.css     → colores, tipografía y diseño (incluida la versión móvil)
js/principal.js     → menú del móvil y avisos de los botones de demostración
img/                → logo, iconos e imágenes de muestra
```

---

## Cómo ver la web

**Opción fácil (sin instalar nada):**
1. En GitHub, pulsa el botón verde **Code → Download ZIP**.
2. Descomprime el ZIP.
3. Haz doble clic en `index.html`. Se abrirá en tu navegador.

**Una vez publicada** (ver más abajo), tendrás un enlace que se puede abrir desde cualquier móvil u ordenador.

---

## Cómo publicarla gratis con GitHub Pages

1. Entra en el repositorio en GitHub.
2. Ve a **Settings** (Configuración) → **Pages** (en el menú de la izquierda).
3. En **Source** elige **Deploy from a branch**.
4. En **Branch** elige **main** y la carpeta **/ (root)**. Pulsa **Save**.
5. Espera 1–2 minutos y recarga la página. Arriba aparecerá el enlace, del tipo:
   `https://TU-USUARIO.github.io/clinicadental/`

> ⚠️ Si el repositorio es **privado**, GitHub Pages solo funciona con un plan de pago (GitHub Pro).
> Alternativas: hacer el repositorio público (Settings → General → Danger Zone → Change visibility)
> o publicarla gratis en **Netlify** o **Vercel** conectando este repositorio.

---

## Cómo cambiar los textos y datos

Todo está en `index.html`. Busca (Ctrl+F) la palabra **EJEMPLO** y cambia cada dato.
Cuando un dato ya sea real, borra su etiqueta:
`<span class="etiqueta-ejemplo">EJEMPLO</span>`

Para editar desde GitHub sin instalar nada: abre el archivo → icono del lápiz ✏️ → cambia el texto → **Commit changes**.

---

## Cómo activar los botones de llamar y WhatsApp

Ahora mismo **son de demostración**: al pulsarlos solo aparece un aviso.

1. En `index.html`, sustituye los números de ejemplo:
   - Teléfono: `tel:+34976000000` → `tel:+34` + número real (sin espacios)
   - WhatsApp: `https://wa.me/34600000000` → `https://wa.me/34` + móvil real (sin espacios ni +)
2. En cada uno de esos enlaces, borra la palabra `data-demo`. Así ya llamarán o abrirán WhatsApp de verdad.

---

## Cómo cambiar las imágenes por fotos reales

Las imágenes actuales son **dibujos de muestra** de la carpeta `img/`:

| Archivo | Dónde aparece | Tamaño recomendado |
|---|---|---|
| `portada.svg` | Imagen grande del inicio | 1120 × 880 px, horizontal |
| `persona-1.svg` … `persona-4.svg` | Fotos del equipo | 400 × 400 px, cuadrada |
| `logo.svg` / `favicon.svg` | Logo y el icono de la pestaña del navegador | cuadrado |

Pasos:
1. Prepara la foto en **.jpg** (mejor si pesa menos de 300 KB; puedes comprimirla gratis en *squoosh.app*).
2. Súbela a la carpeta `img/` (en GitHub: entra en `img` → **Add file → Upload files**).
3. En `index.html`, cambia el nombre del archivo. Por ejemplo:
   `src="img/portada.svg"` → `src="img/portada.jpg"`
4. Actualiza también el texto `alt="..."` describiendo la foto (sirve para la accesibilidad y para Google).

Usa solo fotos propias de la clínica o con licencia libre (por ejemplo, de Unsplash o Pexels),
y cuenta con el **permiso de las personas** que aparezcan en ellas.

---

## Cómo cambiar los colores

Al principio de `css/estilos.css` están las variables de color:
`--verde`, `--verde-oscuro`, `--verde-suave`… Cambia el código de color y se actualizará toda la web.

---

## Pendiente antes de usarla con una clínica real

- [ ] Sustituir todos los datos marcados como EJEMPLO
- [ ] Fotos reales (con permiso de las personas que salen)
- [ ] Revisar con la clínica los tratamientos y las respuestas de preguntas frecuentes
- [ ] Redactar el aviso legal, la política de privacidad y la de cookies
- [ ] Si se añade un formulario o un sistema de citas: aviso de privacidad y casilla de consentimiento (RGPD)
- [ ] Añadir el mapa de Google Maps con la dirección real
- [ ] Quitar el aviso «Web de demostración» del principio de `index.html`
- [ ] Quitar la línea `<meta name="robots" content="noindex, nofollow">` para que Google pueda encontrarla
