import styles from "./demoBiznes.module.css";

export default function SectionIntro({ eyebrow, title, description, align = "center" }) {
  const wrapperClass = `${styles.sectionIntro} ${
    align === "left" ? styles.sectionIntroLeft : ""
  }`;

  return (
    <div className={wrapperClass}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
