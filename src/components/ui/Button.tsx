import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
  children: React.ReactNode;
  target?: "_blank" | "_self";
}

export default function Button({
  href,
  variant = "outline",
  children,
  target = "_self",
}: ButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${styles.btn} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
