import styles from "./Gallery.module.css";

import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import img6 from "../../assets/images/img6.jpg";
import img7 from "../../assets/images/img7.jpg";
import img8 from "../../assets/images/img8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        {/* PAPER HEADER */}
        <div className={styles.headerPaper}>
          <h2>Nuotraukų lenta</h2>
          <p>Kai kurios nuotraukos kreivos. Kai kurios neplanuotos. Kaip ir mūsų baras.</p>
        </div>

        <div className={styles.wall}>
          {images.map((src, i) => (
            <div
              key={i}
              className={styles.photoPaper}
              style={{
                transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
              }}
            >
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
