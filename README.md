# Plataforma Web — Cirugía Bariátrica

Sitio web médico premium para consultorio de cirugía bariátrica. Construido con Next.js, TypeScript, TailwindCSS, Shadcn/ui, Supabase y Framer Motion.

## Stack

- **Next.js** (App Router) + TypeScript
- **TailwindCSS v4** + Shadcn/ui
- **Framer Motion** — animaciones sutiles
- **Supabase** — PostgreSQL (leads, contactos, blog)
- **React Hook Form** + **Zod** — formularios validados
- **Server Actions** — envío seguro de datos
- **Vercel** — despliegue listo

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local

# Desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Copia `.env.example` a `.env.local` y configura:

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL del sitio en producción |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número WhatsApp (sin +) |
| `NEXT_PUBLIC_CALENDAR_URL` | URL embed Cal.com / Calendly |
| `NEXT_PUBLIC_SUPABASE_URL` | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key de Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role (solo servidor) |

> Sin Supabase configurado, los formularios funcionan en modo demo (log en consola).

## Supabase

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Ejecuta el SQL en `supabase/migrations/001_initial_schema.sql` desde el SQL Editor
3. Agrega las credenciales en `.env.local`

## Estructura

```
src/
├── app/              # Páginas y Server Actions
├── components/       # UI, layout, forms, sections
├── content/          # Datos estáticos (servicios, blog, doctor)
├── lib/              # Config, SEO, Supabase, validaciones
├── types/            # Tipos TypeScript
└── utils/            # Utilidades (imágenes placeholder)
```

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con hero, servicios, testimonios, leads |
| `/sobre-el-doctor` | Biografía, certificaciones, video |
| `/servicios` | Listado de procedimientos |
| `/servicios/[slug]` | Detalle por procedimiento |
| `/blog` | Artículos médicos |
| `/blog/[slug]` | Artículo individual |
| `/contacto` | Formulario, mapa, horarios |
| `/agendamiento` | Calendario embebido |

## Deploy en Vercel

1. Sube el repo a GitHub
2. Importa en [vercel.com](https://vercel.com)
3. Agrega las variables de entorno
4. Deploy automático en cada push

## Personalización

- **Contenido médico**: edita `src/content/`
- **Datos del consultorio**: `src/lib/site-config.ts`
- **Imágenes reales**: reemplaza URLs en `src/utils/images.ts` o agrega archivos en `public/images/`
- **Colores**: variables CSS en `src/app/globals.css`

## Scripts

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run start    # Servidor producción
npm run lint     # ESLint
```
