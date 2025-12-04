import { useState, useEffect } from "react";
import styles from "./Hero.module.css";

// import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpeg";
// import img3 from "../../assets/images/img3.jpg";
// import img4 from "../../assets/images/img4.jpg";
// import img5 from "../../assets/images/img5.jpg";

const images = [img2];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5s per photo — 90s slow fade
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className={`${styles.bg} ${i === index ? styles.active : ""}`}
          alt="Slojikai background"
        />
      ))}

      <div className={styles.overlay}></div>

      <div className={styles.content}></div>
    </section>
  );
}
