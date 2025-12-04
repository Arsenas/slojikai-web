import styles from "./Info.module.css";

export function Info() {
  return (
    <section id="info" className={`section ${styles.info}`}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className={styles.heading}>Info &amp; rezervacija</h2>
            <p className={styles.lead}>
              Slojikai gyvena Vokiečių g. 18A, Vilniaus senamiestyje. Maža erdvė, todėl jei planuoji ateiti su didesne
              kompanija – parašyk iš anksto.
            </p>

            <div className={styles.block}>
              <h3>Adresas</h3>
              <p>
                Vokiečių g. 18A <br />
                Vilnius, Lietuva
              </p>
            </div>

            <div className={styles.block}>
              <h3>Darbo laikas</h3>
              <p>
                Antradienis–Ketvirtadienis: 18:00 – 23:00
                <br />
                Penktadienis–Šeštadienis: 18:00 – vėliau
                <br />
                Sekmadienis–Pirmadienis: uždaryta
              </p>
              <p className={styles.small}>
                *Tikslų grafiką visada pasitikrink Facebook ar Instagram paskyroje – baro gyvenimas kartais būna
                spontaniškas.
              </p>
            </div>

            <div className={styles.block}>
              <h3>Kontaktai &amp; rezervacijos</h3>
              <p>
                Tel.: <a href="tel:+37000000000">+370&nbsp;000&nbsp;00000</a> (įrašyk realų numerį)
              </p>
              <p>
                <a href="https://www.facebook.com/Slojikai" target="_blank" rel="noreferrer">
                  Facebook
                </a>{" "}
                ·{" "}
                <a href="https://www.instagram.com/slojikai" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </p>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <div className={styles.tvFrame}>
              <img src="/src/assets/images/tv.png" alt="TV frame" className={styles.tv} />

              <div className={styles.screen}>
                <iframe
                  className={styles.mapIframe}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.5075410954474!2d25.282080276886975!3d54.67863837264654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9404811a7cf5%3A0x7e7ccba6460b7a5!2sVokie%C4%8Di%C5%B3%20g.%2018A%2C%20Vilnius%2001129!5e0!3m2!1sen!2slt!4v1733412220000!5m2!1sen!2slt"
                  loading="lazy"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
