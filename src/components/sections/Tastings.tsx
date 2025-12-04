import styles from "./Tastings.module.css";

import ev1 from "../../assets/images/event-1.jpg";
import ev2 from "../../assets/images/event-2.jpg";
import ev3 from "../../assets/images/event-3.jpg";

export function Tastings() {
  return (
    <section id="tastings" className={styles.tastings}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Kas vyksta Slojikuose?</h2>

        <p className={styles.text}>
          Slojikuose vyksta visko: lietuviško maisto degustacijos, užkandžių vakarienės, bendrai daromi renginiai su
          kitais barais, teminiai vakarai, gyva muzika, keisti performansai, o kartais – tiesiog grynas chaosas
          stiklainiuose. Kiekvienas vakaras čia skirtingas, todėl geriausia patirtis – ateiti ir pamatyti.
        </p>

        <div className={styles.gallery}>
          <img src={ev1} className={styles.photo1} />
          <img src={ev2} className={styles.photo2} />
          <img src={ev3} className={styles.photo3} />
        </div>

        <a href="https://www.facebook.com/Slojikai/events" target="_blank" className={styles.fbButton}>
          Visi renginiai Facebook →
        </a>
      </div>
    </section>
  );
}
