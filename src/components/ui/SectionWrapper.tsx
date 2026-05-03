import styles from "./SectionWrapper.module.css";

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
