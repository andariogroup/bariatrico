# Guía — Probar el sitio en local

Plataforma web de cirugía bariátrica (`bariatrico`). Sigue estos pasos en **Windows** con PowerShell o la terminal de Cursor.

---

## Requisitos previos

| Herramienta | Versión mínima |
|-------------|----------------|
| Node.js     | 18 o superior  |
| npm         | Incluido con Node.js |

Verifica que los tengas instalados:

```powershell
node -v
npm -v
```

---

## Paso 1 — Ir a la carpeta del proyecto

```powershell
cd C:\Users\LENOVO\Documents\bariatrico
```

---

## Paso 2 — Instalar dependencias

Solo necesitas hacerlo la **primera vez**, o después de clonar el repo en otra máquina:

```powershell
npm install
```

---

## Paso 3 — Crear el archivo de entorno

Copia el ejemplo a `.env.local`:

```powershell
Copy-Item .env.example .env.local
```

> **Nota:** Para solo navegar el sitio, no es obligatorio editar `.env.local`.  
> Los formularios funcionarán en **modo demo** (no guardan en base de datos hasta configurar Supabase).

### Variables opcionales (`.env.local`)

```env
# URL del sitio en local
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# WhatsApp (número internacional sin +)
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
NEXT_PUBLIC_WHATSAPP_MESSAGE="Hola, me gustaría agendar una consulta de cirugía bariátrica."

# Cal.com o Calendly (embed)
NEXT_PUBLIC_CALENDAR_URL=https://cal.com/tu-usuario/consulta

# Supabase (opcional para formularios en BD)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Google Maps (opcional)
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=
```

---

## Paso 4 — Iniciar el servidor de desarrollo

```powershell
npm run dev
```

Cuando esté listo verás algo como:

```text
▲ Next.js 16.x
- Local: http://localhost:3000
```

---

## Paso 5 — Abrir en el navegador

Abre: **http://localhost:3000**

---

## Paso 6 — Páginas para probar

| URL | Contenido |
|-----|-----------|
| `/` | Home: hero, servicios, testimonios, formulario de leads |
| `/sobre-el-doctor` | Biografía, certificaciones, video |
| `/servicios` | Listado de procedimientos |
| `/servicios/manga-gastrica` | Detalle del servicio + FAQs |
| `/servicios/bypass-gastrico` | Detalle del servicio + FAQs |
| `/servicios/balon-gastrico` | Detalle del servicio + FAQs |
| `/servicios/tratamiento-obesidad` | Detalle del servicio + FAQs |
| `/blog` | Listado de artículos |
| `/blog/que-es-la-manga-gastrica` | Artículo individual |
| `/contacto` | Formulario, mapa, horarios |
| `/agendamiento` | Calendario embebido (Cal.com / Calendly) |

### Checklist rápido

- [ ] Menú de navegación (desktop y móvil)
- [ ] Botón flotante de WhatsApp (esquina inferior derecha)
- [ ] Formulario de leads en la home
- [ ] Formulario de contacto en `/contacto`
- [ ] Carrusel de testimonios
- [ ] Responsive: redimensiona la ventana del navegador

---

## Paso 7 — Detener el servidor

En la terminal donde corre el proyecto:

```text
Ctrl + C
```

---

## Modo producción local (opcional)

Para probar el build optimizado como en Vercel:

```powershell
npm run build
npm run start
```

Abre: **http://localhost:3000**

---

## Comportamiento sin configurar servicios externos

| Funcionalidad | Sin configurar | Qué pasa |
|---------------|----------------|----------|
| **Formularios** | Sin Supabase | Mensaje de éxito; datos en consola del servidor |
| **Agendamiento** | Sin Cal.com/Calendly | Mensaje pidiendo configurar `NEXT_PUBLIC_CALENDAR_URL` |
| **Imágenes** | Unsplash | Requieren conexión a internet |
| **WhatsApp** | Número de ejemplo | Abre WhatsApp con número placeholder |

---

## Solución de problemas

### Puerto 3000 ocupado

Usa otro puerto:

```powershell
npm run dev -- -p 3001
```

Abre: **http://localhost:3001**

### Error de módulos o dependencias

```powershell
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

### Ver errores de lint

```powershell
npm run lint
```

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con recarga automática |
| `npm run build` | Compila para producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | Revisa errores de ESLint |

---

## Próximos pasos (cuando quieras ir a producción)

1. Configurar **Supabase** y ejecutar `supabase/migrations/001_initial_schema.sql`
2. Reemplazar textos e imágenes en `src/content/` y `src/lib/site-config.ts`
3. Configurar **Cal.com** o **Calendly** en `.env.local`
4. Subir a **GitHub** y desplegar en **Vercel**

Más detalle en [README.md](./README.md).
