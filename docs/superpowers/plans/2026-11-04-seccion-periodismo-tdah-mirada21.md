# Plan de Implementación: Sección «Periodismo & Redacción Editorial» (TDAH y Mirada 21)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrar en el portfolio una sección editorial independiente y de alto impacto visual para el reportaje de investigación sobre el TDAH (*Crisis del Concerta*) y la trayectoria en *Mirada 21* (WordPress, SEO y radio), aplicando los dictámenes de la mesa de expertos (`roast-room`), los estándares de diseño editorial (`impeccable`) y la simplificación de código (`ponytail-review`).

**Architecture:** Maquetación estática en `index.html` con estructura editorial asimétrica (evitando fatiga de tarjetas idénticas), tokens CSS nativos en `css/style.css`, sincronización taxonómica en `js/main.js`, y extracción de miniaturas y PDFs optimizados en `assets/docs/` y `assets/img/`.

**Tech Stack:** HTML5 semántico, CSS3 nativo (tokens y Flexbox/Grid), JavaScript ES6 nativo, PyMuPDF (renderizado de portada vectorial desde PDF), Git.

**Spec:** Requerimientos de Juan Bordería Pi refinados tras la auditoría:
1. Publicar el trabajo del TDAH (*Crisis del Concerta: «Tienes que volver a la casilla cero»*).
2. Publicar la experiencia en Mirada 21 — Medios Universitarios UFV (2022–2024): Redacción periodística, curación informativa, WordPress, SEO y directos de radio.
3. Crear un apartado independiente que rompa la monotonía visual del catálogo de vídeo mediante una composición editorial asimétrica.
4. Auditar y estandarizar todas las etiquetas del portfolio para máxima coherencia profesional.

---

## Dictámenes Integrados

### 1. Consejo Estratégico (`roast-room`)
- **Jeff Bezos:** Tratar esta adición como una decisión Tipo 2 (totalmente reversible), pero orientada a la contratación: un perfil que combina edición de vídeo avanzada con rigor de investigación periodística se desmarca radicalmente de los montadores genéricos.
- **Paul Graham:** Mostrar la evidencia real de inmediato. El titular crudo y humano (*Crisis del Concerta: «Tienes que volver a la casilla cero»*) y el acceso directo al PDF de 3 páginas maquetado en InDesign demuestran oficio periodístico sin necesidad de preámbulos.
- **Gary Vaynerchuk:** La experiencia en Mirada 21 valida el ritmo de redacción diaria en medios digitales (WordPress, SEO) y directos en radio (28M), complementando el proyecto transmedia de *La Capital del Arte*.
- **Naval Ravikant:** La capacidad de investigar temas complejos (sanidad, salud mental) es conocimiento específico con alto apalancamiento reputacional.

### 2. Estándares de Diseño Editorial (`impeccable`)
- **Antipatrón eliminado:** Prohibido crear dos tarjetas genéricas idénticas al grid de vídeos.
- **Composición asimétrica:**
  - *Bloque 1 (TDAH):* Formato dossier de investigación (diseño a 2 columnas con portada visual del PDF a la izquierda y ficha editorial a la derecha: titular en *Playfair Display*, badge de categoría con contraste >= 4.5:1, entradilla directa y botón de descarga/lectura).
  - *Bloque 2 (Mirada 21):* Formato módulo de redacción y medios (acreditación periodística, desglose de funciones clave —WordPress, SEO, radio— y acceso a la muestra documental).
- **Contraste accesible:** Cumplimiento riguroso de WCAG AA en badges, textos secundarios y botones.

### 3. Criterio de Código Limpio (`ponytail-review`)
- Cero dependencias npm o librerías externas.
- CSS modular reutilizando variables nativas (`--bg-card`, `--accent`, `--border`, `--radius`).
- Sincronización estricta de taxonomías entre el HTML estático inicial y el array dinámico de `js/main.js`.
- Enlaces externos seguros con `target="_blank" rel="noopener noreferrer"`.

---

## Global Constraints

- Preservar la arquitectura ligera sin dependencias de frameworks ni build-tools.
- Cumplir la directriz `human-writing-style` (lenguaje periodístico sobrio, sin clichés ni adjetivos inflados).
- Mantener la paleta cromática existente (`#0B0F19`, `#111827`, `#1a2236`, acento `#C8A96E`).
- Garantizar contraste de color accesible (mínimo 4.5:1).

---

## Review Focus

1. **Integridad de enlaces:** Asegurar que `assets/docs/reportaje_tdah_crisis_concerta.pdf` y `assets/docs/mirada21_elecciones_28m.pdf` existen y se abren correctamente.
2. **Coherencia taxonómica:** Verificar que las etiquetas en `index.html` y `js/main.js` coinciden exactamente carácter por carácter.
3. **Comportamiento responsive:** La disposición asimétrica del dossier debe colapsar ordenadamente en una sola columna en pantallas menores a 768px.
4. **Claridad del menú:** Comprobar que el enlace "Periodismo" en la barra de navegación dirige con desplazamiento suave al nuevo bloque.

---

### Task 1: Preparación de activos documentales y visuales

**Files:**
- Create: `assets/docs/reportaje_tdah_crisis_concerta.pdf`
- Create: `assets/docs/mirada21_elecciones_28m.pdf`
- Create: `assets/img/reportaje_tdah_portada.jpg`

- [ ] **Step 1: Crear el directorio `assets/docs` si no existe**
Copiar `Reportaje Requeijo.pdf` a `assets/docs/reportaje_tdah_crisis_concerta.pdf` y `D:\Documentos\Juan\ELECCIONES 28M MIRADA 21.pdf` a `assets/docs/mirada21_elecciones_28m.pdf`.

- [ ] **Step 2: Renderizar la portada del reportaje a imagen de alta definición**
Ejecutar script en Python (`py`) con `fitz` (PyMuPDF) para convertir la primera página de `Reportaje Requeijo.pdf` a `assets/img/reportaje_tdah_portada.jpg` con resolución doble (matriz de escala 2.0x).

- [ ] **Step 3: Validar la generación y visualización de los archivos**
Comprobar pesos y disponibilidad en disco.

---

### Task 2: Auditoría y normalización de etiquetas en todo el portfolio

**Files:**
- Modify: `d:\Documentos\Juan\Portfolio_Web\index.html`
- Modify: `d:\Documentos\Juan\Portfolio_Web\js\main.js`

- [ ] **Step 1: Unificar la taxonomía de roles y categorías**
Normalizar las etiquetas de los vídeos existentes:
  - Producción: `Grabación, Edición y Producción`
  - Edición: `Edición y Postproducción`
  - Locución: `Locución y Voz en Off`
  - RRSS: `Contenido para Redes Sociales`

- [ ] **Step 2: Sincronizar el array `projects` en `js/main.js` con el HTML estático de `index.html`**
Evitar cualquier desajuste visual o de contenido al cargar el script en el navegador.

---

### Task 3: Maquetación editorial de la sección «Periodismo» en `index.html`

**Files:**
- Modify: `d:\Documentos\Juan\Portfolio_Web\index.html`

- [ ] **Step 1: Actualizar barra de navegación**
Insertar enlace `<li><a href="#periodismo">Periodismo</a></li>` en `.nav-links`.

- [ ] **Step 2: Maquetar la sección `<section id="periodismo">`**
Insertar la sección con diseño editorial:
  - Encabezado de sección:
    - Label: `Periodismo & Redacción`
    - Título: `Investigación Periodística y Medios Digitales`
    - Subtítulo: `Reportajes de profundidad, curación informativa y gestión de contenidos editoriales.`
  - **Bloque Dossier (Crisis del Concerta / TDAH):**
    - Contenedor con clase `.editorial-dossier`.
    - Miniatura de portada con enlace al PDF y badge superpuesto `Reportaje de Investigación`.
    - Información: Titular en *Playfair Display* («Crisis del Concerta: "Tienes que volver a la casilla cero"`), subtítulo de asignación (*Periodismo de Fuente y Reporterismo · UFV*), entradilla contextual sobre el desabastecimiento farmacéutico y botón de acción directa `Leer Reportaje Completo (PDF)`.
  - **Bloque Newsroom (Mirada 21):**
    - Contenedor con clase `.editorial-newsroom`.
    - Badge `Redacción Web, SEO & Radio (2022–2024)`.
    - Titular: *Mirada 21 — Medios Universitarios UFV*.
    - Descripción de la experiencia en redacción, edición en WordPress y SEO.
    - Cuadrícula de competencias:
      - *WordPress & SEO:* Redacción de actualidad y optimización on-page en `mirada21.es`.
      - *Coberturas Especiales:* Seguimiento electoral en directo (Elecciones autonómicas y municipales 28M).
      - *Locución & Radio:* Emisión en directo y producción radiofónica universitaria.
    - Botón de acción: `Ver Cobertura Especial 28M (PDF)`.

- [ ] **Step 3: Actualizar datos estructurados Schema.org**
Enriquecer el JSON-LD en `index.html` con las competencias periodísticas y de redacción SEO.

---

### Task 4: Estilos CSS editoriales en `css/style.css`

**Files:**
- Modify: `d:\Documentos\Juan\Portfolio_Web\css\style.css`

- [ ] **Step 1: Añadir reglas para `.editorial-dossier` y `.editorial-newsroom`**
Implementar distribución asimétrica, bordes sobrios con `--border`, sombras sutiles, efectos hover fluidos y tipografías consistentes.

- [ ] **Step 2: Estilos para badges, listas de hitos y botones editoriales**
Asegurar contraste AA (>= 4.5:1) en todos los elementos textuales y badges.

- [ ] **Step 3: Adaptación responsive (<768px)**
Asegurar que la portada del reportaje y los bloques de texto colapsan con orden natural en móviles.

---

### Task 5: Verificación integral y control de calidad

**Files:**
- Repositorio completo

- [ ] **Step 1: Verificación de rutas y archivos generados**
- [ ] **Step 2: Auditoría de accesibilidad y contrastes**
- [ ] **Step 3: Comprobación de responsividad y renderizado**
- [ ] **Step 4: Commit en Git con mensaje técnico estructurado**
