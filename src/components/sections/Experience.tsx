import type { Experience as ExperienceType } from "@/types/cv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import styles from "./Timeline.module.css";

interface ExperienceProps {
  items: ExperienceType[];
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <SectionWrapper id="experiencia" title="Experiencia">
      <div className={styles.timeline}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.date}>
              <span>{item.startDate}</span>
              <span>{item.endDate ?? "Presente"}</span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.role}>{item.role}</h3>
              <p className={styles.subtitle}>
                {item.company} · {item.location}
              </p>
              <ul className={styles.bullets}>
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
