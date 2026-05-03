import type { Project } from "@/types/cv";
import SectionWrapper from "@/components/ui/SectionWrapper";
import styles from "./Projects.module.css";

interface ProjectsProps {
  items: Project[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <SectionWrapper id="proyectos" title="Proyectos">
      <div className={styles.grid}>
        {items.map((project) => (
          <div key={project.name} className={styles.card}>
            <span className={styles.context}>{project.context}</span>
            <h3 className={styles.name}>{project.name}</h3>
            <p className={styles.description}>{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Ver proyecto →
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
