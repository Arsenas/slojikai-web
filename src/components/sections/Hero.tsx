import styles from "./Hero.module.css";
import bg from "../../assets/images/img2.jpeg";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <img src={bg} className={styles.bg} alt="Slojikai background" />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.tagline}>Tikri skoniai gimsta stiklainyje.</p>
      </div>
    </section>
  );
}
