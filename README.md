# CV — Roller Andrés Hernández López


## Stack

- **Next.js 14** (App Router, `output: "export"` para static export)
- **TypeScript**
- **CSS Modules** 

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

> No se necesita ninguna configuración extra. `output: "export"` en `next.config.js` genera un sitio estático optimizado.
