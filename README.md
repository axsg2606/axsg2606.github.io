# 💖 Propuesta para Lucía 💖

Página web romántica e interactiva creada especialmente para **Lucía Abigail Ruiz Diaz Robles**.  
Incluye animaciones suaves, colores pastel, música de fondo, una secuencia cinematográfica de tensión y la pregunta final: **"¿Quieres ser mi novia?"**.

## ✨ Características

- 🎬 **Animación de bienvenida** con Cinnamoroll y mensaje inicial.
- 🌸 **Colores pastel degradados** (rosado, morado, rojo corazón).
- 💌 **Poemas personalizados** con iconos SVG de corazones, girasoles y tulipanes.
- 🎵 **Música de fondo** (`musica-fondo.mp3`) que se reproduce automáticamente.
- ⚡ **Sección de tensión cinematográfica** con fondo negro, mensajes palabra por palabra y música especial (`tension.mp3`).
- ❤️ **Propuesta final** con poema apasionado y botones interactivos "Sí" / "No" (el botón "No" se vuelve escurridizo 😄).
- 🎉 **Celebración** con lluvia de corazones al aceptar.
- 📱 **Diseño responsive** compatible con teléfonos, tablets y computadoras.
- 🔇 **Botón flotante** para silenciar/activar la música.

## 📁 Estructura del proyecto

propuesta/
│
├── index.html
├── css/
│ └── style.css
├── js/
│ └── script.js
├── assets/
│ ├── audio/
│ │ ├── musica-fondo.mp3
│ │ └── tension.mp3
│ └── img/
│ └── cinamonroll.png
└── README.md

text

## 🚀 Cómo usar

### Opción 1: Abrir localmente
1. Descarga o clona este repositorio.
2. Asegúrate de que los archivos de audio e imagen estén en las rutas indicadas.
3. Abre `index.html` en tu navegador favorito (Chrome, Edge, Firefox, Safari).
4. Si la música no inicia automáticamente, haz clic en cualquier parte de la página o en el botón de música (esquina inferior derecha).

### Opción 2: Publicar en línea (recomendado)
Para compartir el enlace sin problemas de certificados o bloqueos:

- **Netlify Drop:**  
  1. Comprime la carpeta `propuesta` en un `.zip`.  
  2. Arrastra el archivo a [app.netlify.com/drop](https://app.netlify.com/drop).  
  3. Obtendrás una URL como `https://nombre-aleatorio.netlify.app`.

- **GitHub Pages:**  
  1. Sube los archivos a un repositorio en GitHub.  
  2. Activa GitHub Pages en *Settings → Pages*.  
  3. Recibirás una URL tipo `https://tuusuario.github.io/propuesta/`.

## 🎨 Personalización

- **Cambiar la imagen de Cinnamoroll:** reemplaza `assets/img/cinamonroll.png` por otra imagen con el mismo nombre.
- **Cambiar la música de fondo:** sustituye `assets/audio/musica-fondo.mp3`.
- **Cambiar la música de tensión:** sustituye `assets/audio/tension.mp3`.
- **Editar los poemas:** modifica el texto dentro de las etiquetas `<div class="poem">` y `<div class="proposal-poem">` en `index.html`.
- **Cambiar los mensajes de tensión:** edita el arreglo `cinematicMessageTexts` en `js/script.js`.
- **Ajustar la velocidad de las palabras:** modifica el valor `250` (milisegundos) en la función `showNextWord()` dentro de `script.js`.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 (animaciones, gradientes, flexbox, media queries)
- JavaScript vanilla (sin dependencias)
- Fuentes de Google Fonts: Poppins, Dancing Script, Great Vibes
- Iconos SVG personalizados

## 📝 Notas

- El autoplay de audio puede ser bloqueado por algunos navegadores; se soluciona con el primer clic del usuario.
- La sección de propuesta es desplazable verticalmente en pantallas pequeñas para que todo el contenido sea visible.
- El botón "No" se mueve aleatoriamente después de varios clics para asegurar una respuesta afirmativa 😉.

## 💌 Créditos

Creado con mucho amor para Lucía.  
Hecho a mano con HTML, CSS y JavaScript.

---

¡Mucha suerte en tu declaración! 💖
