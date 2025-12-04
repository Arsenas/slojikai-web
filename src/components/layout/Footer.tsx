import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© {year} Slojikai B.A.R.A.S</span>

        <span className={styles.note}>Sukurta su meile marinuotiems agurkams ir 90&apos;ųjų Lietuvai.</span>

        <a href="https://arsenij.dev" target="_blank" rel="noreferrer" className={styles.signature}>
          arsenij.dev
        </a>
      </div>
    </footer>
  );
}
