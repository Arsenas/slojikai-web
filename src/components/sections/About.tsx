import styles from "./About.module.css";

import hero from "../../assets/images/utopenc.png";

import p1 from "../../assets/images/buterbrod.jpg";
import p2 from "../../assets/images/shots.jpg";
import p3 from "../../assets/images/beer.jpg";
import p4 from "../../assets/images/pickle.png";

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.texture}></div>

      <div className={styles.inner}>
        {/* TEXT */}
        <div className={styles.textBox}>
          <h2 className={styles.title}>КAS PER BARAS?</h2>

          <p>
            Slojikai nėra stilizacija. Tai <strong>paveldo zona</strong>, kur 90’ųjų Lietuva tiesiog nesutiko išnykti.
          </p>

          <p>
            Čia radiatoriai leidžia alų, agurkai turi daugiau charakterio nei žmonės, o kiekviena detalė yra tikras
            artefaktas iš močiutės sandėliuko.
          </p>

          <p>
            Jei ieškai sterilumo – eik į prekybos centrą. Jei ieškai tikrų prisiminimų kvapo – sveikas sugrįžęs namo.
          </p>

          <p className={styles.small}>Baras. Muziejus. Chaosas. Tikrumas.</p>
        </div>

        {/* RIGHT SIDE: MUSEUM COLUMN */}
        <div className={styles.museumColumn}>
          {/* MAIN EXHIBIT */}
          <div className={styles.heroExhibit}>
            <img src={hero} />
            <div className={styles.pin}></div>
            <span className={styles.label}>Eksponatas Nr.1 — “Utopencas”</span>
          </div>

          {/* CHAOS COLLAGE */}
          <div className={styles.collage}>
            <img className={styles.ph1} src={p1} />
            <img className={styles.ph2} src={p2} />
            <img className={styles.ph3} src={p3} />
            <img className={styles.ph4} src={p4} />

            <div className={styles.pinSmall}></div>
            <div className={styles.pinSmall2}></div>
          </div>
        </div>
      </div>

      {/* BOTTOM EXHIBITS */}
      <div className={styles.exhibitRow}>
        <div className={styles.exhibitCard}>
          <div className={styles.exhibitImg}></div>
          <p>Eksponatas Nr. 4 – Radiatoriaus kranas (dar veikiantis)</p>
        </div>

        <div className={styles.exhibitCard}>
          <div className={styles.exhibitImg2}></div>
          <p>Eksponatas Nr. 5 – Agurko kapsulė, XXa. pabaiga</p>
        </div>

        <div className={styles.exhibitCard}>
          <div className={styles.exhibitImg3}></div>
          <p>Eksponatas Nr. 6 – „Elektronika“ siurblys, legenda</p>
        </div>
      </div>
    </section>
  );
}
