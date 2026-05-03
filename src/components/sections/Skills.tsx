import type { SkillGroup } from "@/types/cv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Tag from "@/components/ui/Tag";
import styles from "./Skills.module.css";

interface SkillsProps {
  groups: SkillGroup[];
}

export default function Skills({ groups }: SkillsProps) {
  return (
    <SectionWrapper id="habilidades" title="Habilidades">
      <div className={styles.grid}>
        {groups.map((group) => (
          <div key={group.category} className={styles.row}>
            <span className={styles.category}>{group.category}</span>
            <div className={styles.tags}>
              {group.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
