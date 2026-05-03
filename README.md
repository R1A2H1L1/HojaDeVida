# CV — Roller Andrés Hernández López

Portfolio/CV personal construido con **Next.js 14** (App Router), TypeScript y CSS Modules. Diseño minimalista, responsive y listo para desplegar en Vercel.

## Stack

- **Next.js 14** (App Router, `output: "export"` para static export)
- **TypeScript**
- **CSS Modules** (sin Tailwind, sin librerías de UI)
- Sin dependencias de runtime extra

## Estructura

```
src/
├── app/
│   ├── layout.tsx        # Root layout con metadata
│   ├── page.tsx          # Página principal (ensambla secciones)
│   └── globals.css       # Variables CSS globales y reset
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx / .module.css
│   │   └── Footer.tsx / .module.css
│   ├── sections/
│   │   ├── Hero.tsx / .module.css
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Timeline.module.css  # CSS compartido entre Experience y Education
│   │   ├── Skills.tsx / .module.css
│   │   ├── Projects.tsx / .module.css
│   │   ├── Certifications.tsx / .module.css
│   │   └── Contact.tsx / .module.css
│   └── ui/
│       ├── SectionWrapper.tsx / .module.css
│       ├── Button.tsx / .module.css
│       └── Tag.tsx / .module.css
├── data/
│   └── cv.ts             # ← Toda tu info está acá
└── types/
    └── cv.ts             # Interfaces TypeScript
```

## Actualizar contenido

Todo el contenido está centralizado en **`src/data/cv.ts`**. Para actualizar algo (experiencia, proyectos, skills, etc.) solo edita ese archivo.

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Agregar foto de perfil

1. Coloca tu imagen en `public/avatar.jpg`
2. En `src/components/sections/Hero.tsx`, reemplaza el bloque del avatar:

```tsx
import Image from "next/image";

// Reemplaza el <div className={styles.avatar}> con:
<div className={styles.avatar}>
  <Image
    src="/avatar.jpg"
    alt="Roller Hernández"
    fill
    className={styles.avatarImg}
  />
</div>
```

## Deploy en Vercel

1. Sube el proyecto a un repositorio de GitHub
2. En [vercel.com](https://vercel.com) → **New Project** → importa el repo
3. Vercel detecta Next.js automáticamente → click **Deploy**
4. Listo. Vercel asigna un dominio `*.vercel.app` de inmediato

> No se necesita ninguna configuración extra. `output: "export"` en `next.config.js` genera un sitio estático optimizado.
