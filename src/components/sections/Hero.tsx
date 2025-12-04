import styles from "./Hero.module.css";
import bg from "../../assets/images/img2.jpeg";
// import logo from "../../assets/images/logo.png";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <img src={bg} className={styles.bg} alt="Slojikai background" />

      <div className={styles.overlay}></div>

      {/* <div className={styles.content}>
        <img src={logo} alt="Slojikai logo" className={styles.logo} />

        <p className={styles.tagline}>Baras su 90'ųjų skoniu ir marinuotu gyvenimu.</p>

        <div className={styles.links}>
          <a href="#menu">Meniu</a>
          <a href="#info">Kur rasti?</a>
        </div>
      </div> */}
    </section>
  );
}
