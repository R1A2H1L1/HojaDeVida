import type { Education as EducationType } from "@/types/cv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import styles from "./Timeline.module.css";

interface EducationProps {
  items: EducationType[];
}

export default function Education({ items }: EducationProps) {
  return (
    <SectionWrapper id="educacion" title="Educación">
      <div className={styles.timeline}>
        {items.map((item, i) => (
          <div key={i} className={styles.item}>
            <div className={styles.date}>
              {item.startYear && <span>{item.startYear}</span>}
              <span>
                {item.current ? `${item.endYear} (est.)` : item.endYear}
              </span>
            </div>
            <div className={styles.body}>
              <h3 className={styles.role}>{item.degree}</h3>
              <p className={styles.subtitle}>
                {item.institution} · {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
