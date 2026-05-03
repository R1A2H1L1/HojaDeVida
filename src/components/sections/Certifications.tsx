import type { Certification } from "@/types/cv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import styles from "./Certifications.module.css";

interface CertificationsProps {
  items: Certification[];
}

export default function Certifications({ items }: CertificationsProps) {
  return (
    <SectionWrapper id="certificaciones" title="Certificaciones">
      <div className={styles.list}>
        {items.map((cert) => (
          <div key={cert.name} className={styles.item}>
            <div>
              <p className={styles.name}>{cert.name}</p>
              <p className={styles.issuer}>{cert.issuer}</p>
            </div>
            <div className={styles.right}>
              {cert.year && <span className={styles.year}>{cert.year}</span>}
              {cert.status === "in-progress" && (
                <span className={styles.badgeInProgress}>En curso</span>
              )}
              {cert.status === "completed" && (
                <span className={styles.badgeCompleted}>Completado</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
