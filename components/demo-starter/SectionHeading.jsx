import styles from "./demoStarter.module.css";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className={styles.sectionHeading}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
