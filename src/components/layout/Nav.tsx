import { useState } from "react";
import styles from "./Nav.module.css";
import logo from "../../assets/images/logo.png";

const NAV_LEFT = [
  { href: "#about", label: "Kas per baras?" },
  { href: "#tastings", label: "Degustacijos" },
];

const NAV_RIGHT = [
  { href: "#gallery", label: "Galerija" },
  { href: "#info", label: "Info & Rezervacija" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* LEFT DESKTOP NAV */}
        <nav className={styles.leftNav}>
          {NAV_LEFT.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* CENTER LOGO */}
        <a href="#hero" className={styles.logoLink}>
          <img src={logo} alt="Slojikai" className={styles.logo} />
        </a>

        {/* RIGHT DESKTOP NAV */}
        <nav className={styles.rightNav}>
          {NAV_RIGHT.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE BURGER */}
        <button className={`${styles.burger} ${open ? styles.open : ""}`} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
        {[...NAV_LEFT, ...NAV_RIGHT].map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)} className={styles.mobileItem}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
