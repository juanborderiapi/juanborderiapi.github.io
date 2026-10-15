# Plan de Posicionamiento SEO para juanborderiapi.github.io

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Configurar el repositorio y los perfiles vinculados para que https://juanborderiapi.github.io/ sea indexado en Google y alcance la primera posición al buscar «juan bordería pi» y «juan borderia pi».

**Architecture:** Optimización SEO técnica on-page (HTML semántico estático, metadatos enriquecidos con variantes de nombre con y sin tilde, sitemap.xml actualizado) junto con directrices de autoridad externa (triangulación en perfil de GitHub, Search Console y redes profesionales).

**Tech Stack:** HTML5, XML (Sitemap), JSON-LD (Schema.org), Git / GitHub Pages, Google Search Console.

**Spec:** Requerimientos solicitados por Juan Bordería Pi para el repositorio local y el despliegue en GitHub Pages.

## Global Constraints

- Mantener la arquitectura ligera del portfolio (sin dependencias npm ni frameworks pesados).
- Cumplir la guía `human-writing-style` (cero adjetivos inflados, lenguaje directo y descriptivo).
- Respetar los estilos visuales y la funcionalidad interactiva existente en `js/main.js` y `css/style.css`.
- Preservar la integridad de los datos en `projects` y la estructura canónica `https://juanborderiapi.github.io/`.

## Review Focus

1. Caracteres especiales y tildes: Asegurar que tanto «Juan Bordería Pi» como «Juan Borderia Pi» y «Juan Bordería» estén contemplados en metadatos y Schema.org.
2. Contenido legible para rastreadores que no ejecutan JavaScript: Mantener texto indexable dentro del HTML base antes de la inyección de `js/main.js`.
3. Verificación de Google Search Console: Dejar preparado el espacio exacto para la metaetiqueta o archivo de validación sin romper la cabecera.
4. Exactitud de rutas y enlaces canónicos en sitemap.xml y robots.txt.
5. Coherencia en los enlaces externos recíprocos (GitHub y LinkedIn).

---

### Task 1: Actualizar sitemap.xml y optimizar metadatos en index.html

**Files:**
- Modify: `d:\Documentos\Juan\Portfolio_Web\sitemap.xml`
- Modify: `d:\Documentos\Juan\Portfolio_Web\index.html:1-65`

- [ ] **Step 1: Actualizar sitemap.xml con fecha actual**
Actualizar el campo `<lastmod>` a `2026-10-15` en `sitemap.xml`.

- [ ] **Step 2: Enriquecer metadatos y variantes de nombre en index.html**
Añadir soporte explícito a variaciones de búsqueda sin tilde en keywords y en el bloque Schema.org `Person.alternateName`: "Juan Borderia Pi", "Juan Borderia".
Añadir la etiqueta meta de verificación de Google (`<meta name="google-site-verification" content="PENDIENTE_DE_VALOR" />`) debidamente comentada y lista para insertar el código del usuario.

- [ ] **Step 3: Verificar sintaxis de index.html y sitemap.xml**
Comprobar que el archivo XML es válido y que el bloque `<head>` de `index.html` cierra correctamente sin etiquetas huérfanas.

---

### Task 2: Añadir texto semántico indexable en el HTML base

**Files:**
- Modify: `d:\Documentos\Juan\Portfolio_Web\index.html:145-160`

- [ ] **Step 1: Incluir contenido de respaldo accesible dentro de `<div id="video-grid">`**
Colocar dentro del contenedor `#video-grid` tarjetas o texto semántico inicial con los títulos de los proyectos principales (La Capital del Arte, Regnum Christi Institucional, vídeos de montaje y locución) para que bots que no esperan la ejecución del script JS lean el contenido inmediatamente.
Cuando `main.js` se ejecute, reemplazará el contenido por el grid interactivo habitual.

- [ ] **Step 2: Probar renderizado local en navegador**
Comprobar que al cargar la página el JavaScript reemplaza el contenedor sin generar saltos visuales ni alterar los filtros de categoría.

---

### Task 3: Configuración del repositorio y perfil en GitHub

**Files:**
- Modify: `d:\Documentos\Juan\Portfolio_Web\README.md`

- [ ] **Step 1: Documentar en README.md los pasos de despliegue y SEO**
Añadir una sección técnica en `README.md` que detalle la configuración de dominio canónico, sitemap y verificación de Search Console.

- [ ] **Step 2: Lista de comprobación para github.com/juanborderiapi**
Definir los campos exactos a actualizar en la interfaz web de GitHub:
- Nombre público del perfil: `Juan Bordería Pi`
- Campo Website del perfil: `https://juanborderiapi.github.io/`
- Sección "About" del repositorio: Descripción, tags y Website activo.

---

### Task 4: Sincronización en Git y verificación de Google Search Console

**Files:**
- Git repository (`d:\Documentos\Juan\Portfolio_Web`)

- [ ] **Step 1: Comprobar el estado del repositorio local**
Ejecutar `git status` y `git diff` para revisar los cambios realizados.

- [ ] **Step 2: Crear commit con mensaje descriptivo y preparar push**
Registrar los cambios con un mensaje estructurado (`feat(seo): actualizar sitemap, metadatos y estructura indexable`).

- [ ] **Step 3: Ejecución de verificación en Google Search Console**
Instrucciones precisas para obtener el código de verificación, insertarlo si se desea antes del push definitivo, o verificar mediante archivo HTML.
