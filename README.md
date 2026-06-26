# Vezzper — Landing Page

Landing page de **Vezzper**: estrategia, diseño y gestión de contenido profesional para redes sociales.

🔗 **Sitio en vivo:** https://yovermarkt.github.io/vezzper/

## 📁 Estructura

```
vezzper/
├── index.html        # Página (HTML + contenido + lógica del componente)
├── styles.css        # Tipografías @font-face + estilos base
├── dc-runtime.js     # Motor que renderiza la plantilla y el formulario
├── assets/           # Fuentes web (.woff2): Plus Jakarta Sans, Sora, Space Mono
└── .nojekyll         # Evita que GitHub Pages (Jekyll) ignore archivos
```

> Todos los gráficos (logo, íconos, formas) son SVG/CSS escritos dentro de `index.html`; el sitio no depende de archivos de imagen ni de recursos externos.

## 🚀 Ver en local

Al usar fuentes y un script externo, ábrelo con un servidor local (no con doble clic en `file://`):

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node
npx serve .
```

Luego abre http://localhost:8000

## 🔄 Actualizar el sitio

Tras editar cualquier archivo:

```bash
git add -A
git commit -m "Describe tu cambio"
git push
```

GitHub Pages reconstruye automáticamente en ~1 minuto. Si ves la versión anterior, refresca con `Ctrl+F5` (caché del navegador).

## ⚙️ Despliegue

Publicado con **GitHub Pages** desde la rama `main` (carpeta raíz), con HTTPS forzado.
Para revisar la configuración: **Settings → Pages**.

## 🎨 Personalización

- **Contenido y estilos:** se editan directamente en `index.html` (la mayoría de los estilos son inline).
- **Color de acento / lógica:** al final de `index.html`, dentro de `<script type="text/x-dc">`, está el componente que define el acento (Violeta `#5B1EF5`, Índigo, Lavanda) y el comportamiento del formulario de contacto.
- **Fuentes:** definidas en `styles.css` y servidas localmente desde `assets/`.
