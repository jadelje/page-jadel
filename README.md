# DPERSA Cloud & DevOps — Landing Page

Landing page estática construida con [Astro](https://astro.build), desplegada en Cloudflare Pages en `cloud-devops.dpersa.com`.

## Stack

- **Framework:** Astro 4 (static output, no framework)
- **Estilos:** CSS puro (no Tailwind), con custom properties (design tokens)
- **JS:** Mínimo — sólo el hamburger menu en mobile
- **Deploy:** Cloudflare Pages
- **Formulario:** Formspree (requiere configuración, ver abajo)

---

## Instalación y desarrollo local

```bash
# Clonar e instalar dependencias
git clone <repo>
cd page-jadel
npm install

# Copiar variables de entorno
cp .env.example .env
# Editar .env y agregar el número de WhatsApp real

# Servidor de desarrollo
npm run dev
# → http://localhost:4321

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Variables de entorno

| Variable | Descripción | Ejemplo |
|---|---|---|
| `PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp en formato internacional, sin `+` ni espacios | `573001234567` |
| `PUBLIC_CONTACT_EMAIL` | Email de contacto mostrado en el footer. Si no se define, el enlace no aparece. | `contacto@dpersa.com` |

Crear un archivo `.env` (no se sube al repositorio):

```
PUBLIC_WHATSAPP_NUMBER=573001234567
PUBLIC_CONTACT_EMAIL=contacto@dpersa.com
```

En Cloudflare Pages, agregar estas variables en: **Settings → Environment variables**.

---

## Despliegue en Cloudflare Pages

### Primera vez

1. Ir a [Cloudflare Pages](https://pages.cloudflare.com/) → **Create a project**
2. Conectar el repositorio de GitHub
3. Configurar el build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Agregar variables de entorno: `PUBLIC_WHATSAPP_NUMBER` y `PUBLIC_CONTACT_EMAIL`
5. Deploy

### Dominio personalizado

1. En el proyecto de Cloudflare Pages → **Custom domains**
2. Agregar `cloud-devops.dpersa.com`
3. En el DNS de Cloudflare (o tu registrador), agregar el CNAME que indica Cloudflare Pages

### Actualizaciones

Cada push a la rama `master` dispara un deploy automático.

---

## Formspree (formulario de contacto)

1. Registrarse en [formspree.io](https://formspree.io)
2. Crear un nuevo form y copiar el ID (ejemplo: `xpzgkwqr`)
3. En `src/components/Contact.astro`, reemplazar:
   ```ts
   const FORMSPREE_ID = "YOUR_FORM_ID";
   ```
   Por el ID real.

---


## Estructura del proyecto

```
page-jadel/
├── astro.config.mjs          # Configuración de Astro
├── package.json
├── tsconfig.json
├── .env.example              # Variables de entorno de ejemplo
├── .gitignore
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── layouts/
    │   └── Layout.astro      # Layout base con SEO, meta tags, fuentes
    ├── components/
    │   ├── Navbar.astro      # Navbar fija con hamburger mobile
    │   ├── Hero.astro        # Hero con grid background CSS
    │   ├── PainPoints.astro  # Grid de puntos de dolor
    │   ├── Services.astro    # 3 servicios con precios y CTAs
    │   ├── OnDemandDevOps.astro  # Sección DevOps bajo demanda
    │   ├── HowWeHelp.astro   # Proceso paso a paso
    │   ├── UseCases.astro    # 6 casos de uso (link a WhatsApp)
    │   ├── Experience.astro  # Tecnologías y experiencia
    │   ├── FAQ.astro         # Accordion CSS puro (details/summary)
    │   ├── Contact.astro     # Formulario + WhatsApp
    │   └── Footer.astro      # Footer con links
    ├── pages/
    │   ├── index.astro       # Página principal
    │   └── sitemap.xml.ts    # Sitemap dinámico
    ├── styles/
    │   └── global.css        # Design tokens y estilos globales
    └── utils/
        └── whatsapp.ts       # Helper para links de WhatsApp
```

---

## Checklist de producción

- [ ] Configurar `PUBLIC_WHATSAPP_NUMBER` en Cloudflare Pages (número real)
- [ ] Configurar `PUBLIC_CONTACT_EMAIL` en Cloudflare Pages (email real)
- [ ] Configurar Formspree y reemplazar `YOUR_FORM_ID` en `Contact.astro`
- [ ] Crear un OG image real y subir a `/public/og-image.png`
- [ ] Verificar el dominio `cloud-devops.dpersa.com` en Cloudflare
- [ ] Probar el formulario en producción
- [ ] Probar links de WhatsApp en mobile
- [ ] Verificar Lighthouse (objetivo: 90+ en todas las categorías)

---

## V2 — Recomendaciones futuras

- **Blog técnico:** Sección de artículos con Astro Content Collections
- **Testimonios:** Sección con reseñas de clientes (requiere contenido real)
- **Calculadora de costos:** Herramienta interactiva para estimar ahorro en AWS
- **Chat flotante:** WhatsApp widget siempre visible
- **Analytics:** Cloudflare Web Analytics (sin cookies, gratis)
- **i18n:** Versión en inglés para mercados hispanohablantes en el exterior
- **Portafolio:** Casos de estudio con resultados reales (cuando haya clientes)

---

## Paleta de colores

Todos los colores están definidos como CSS custom properties en `src/styles/global.css` (`:root`). Para cambiar el diseño, edita únicamente ese archivo.

### Fondos

| Token | Hex | Uso |
|---|---|---|
| `--bg-primary` | `#0a0f1e` | Fondo base de toda la página |
| `--bg-secondary` | `#0f1629` | Fondo alternativo de secciones |
| `--bg-card` | `#111827` | Fondo de tarjetas y paneles |
| `--bg-card-hover` | `#1a2236` | Fondo de tarjetas al hacer hover |

### Bordes

| Token | Valor | Uso |
|---|---|---|
| `--border` | `#1e293b` | Borde estándar de tarjetas y elementos |
| `--border-accent` | `#3b82f620` | Borde azul translúcido al hacer hover en tarjetas (20% opacidad) |

### Texto

| Token | Hex | Uso |
|---|---|---|
| `--text-primary` | `#f1f5f9` | Títulos, texto principal |
| `--text-secondary` | `#94a3b8` | Párrafos, descripciones |
| `--text-muted` | `#64748b` | Texto de menor jerarquía, metadatos |

### Acento (azul)

| Token | Hex | Uso |
|---|---|---|
| `--accent` | `#3b82f6` | Color principal de marca — botones primarios, highlights |
| `--accent-hover` | `#2563eb` | Estado hover de botones primarios |
| `--accent-light` | `#60a5fa` | Labels de sección, textos acento, íconos |
| `--accent-cyan` | `#06b6d4` | Gradiente de texto decorativo junto a `--accent-light` |

### Especiales

| Token | Hex | Uso |
|---|---|---|
| `--success` | `#10b981` | Confirmaciones, indicadores positivos |
| WhatsApp | `#25d366` | Borde y texto del botón de WhatsApp (no es un token, se usa directo) |

### Sombras

| Token | Valor | Uso |
|---|---|---|
| `--shadow` | `0 4px 24px rgba(0,0,0,0.4)` | Sombra genérica de elevación |
| `--shadow-accent` | `0 0 20px rgba(59,130,246,0.15)` | Glow azul sutil en hover de tarjetas y botones |

### Gradiente de texto

El helper `.gradient-text` aplica un degradado de `--accent-light` → `--accent-cyan` (135°) como texto decorativo en títulos destacados.

```css
background: linear-gradient(135deg, #60a5fa, #06b6d4);
```

### Radios de borde

| Token | Valor | Uso |
|---|---|---|
| `--radius` | `0.75rem` | Tarjetas, modales |
| `--radius-sm` | `0.5rem` | Botones, inputs |
