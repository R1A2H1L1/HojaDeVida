import styles from "./Footer.module.css";

interface FooterProps {
  name: string;
}

export default function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>
        © {year} {name}
      </p>
      <p className={styles.location}>Medellín, Colombia</p>
    </footer>
  );
}
