import styles from "./About.module.css";

import photo1 from "../../assets/images/about-1.jpg";
import photo2 from "../../assets/images/about-2.jpg";
import photo3 from "../../assets/images/about-3.jpg";

export function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.wrapper}>
        {/* LEFT — TEXT */}
        <div className={styles.left}>
          <h2 className={styles.heading}>Kas mes tokie?</h2>

          <p>
            Slojikai<span className={styles.asterisk}>*</span> — tai baras, kuris nesistengia būti gražesnis už savo
            kilmę. Mes kilę iš stiklainio: rūgštaus, paprasto, lietuviškai-slaviško, iš tų laikų, kai skoniai gimdavo ne
            laboratorijose, o virtuvėse su nusilupusiais stalviršiais.
          </p>

          <p>
            Čia nebus sterilios elegancijos. Bus tamsa, metalas, šaltis ir šiluma viename — kaip senas daugiabučio
            rūsys, kuriame kiekvienas stiklainis turi savo kvapą ir istoriją.
          </p>

          <p>
            Mes patys nesame konceptualūs. Mes tiesiog tokie esam: kiek pašiurpę, kiek nostalgiški, kiek ironiški, be
            jokių pretenzijų būti barų scenos dalimi.
          </p>

          <p>Jeigu nori vietos, kuri neprašytų tavęs vaidinti — sėsk. Čia tavęs niekas netaiso. Čia tik pripila.</p>

          <div className={styles.footnote}>
            <span className={styles.star}>*</span>
            <span>
              <strong className={styles.title}>Slojikas</strong> – stiklainis; šnekamoji forma iš slaviško „слойик“. Mes
              šį žodį prikėlėm naujam gyvenimui — šįkart su alkoholiu.
            </span>
          </div>
        </div>

        {/* RIGHT — MESSY IMAGES */}
        <div className={styles.right}>
          <img src={photo1} className={styles.photo1} />
          <img src={photo2} className={styles.photo2} />
          <img src={photo3} className={styles.photo3} />
        </div>
      </div>
    </section>
  );
}
