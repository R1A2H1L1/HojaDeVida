import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#educacion", label: "Educación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

interface NavbarProps {
  name: string;
}

export default function Navbar({ name }: NavbarProps) {
  const shortName = name.split(" ").slice(0, 2).join(" ");

  return (
    <nav className={styles.nav}>
      <span className={styles.brand}>{shortName}</span>
      <ul className={styles.links}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
