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
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.sideNav}>
          {NAV_LEFT.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* LOGO AS A CLICKABLE LINK */}
        <a href="#hero" className={styles.logoLink}>
          <img src={logo} alt="Slojikai" className={styles.logo} />
        </a>

        <nav className={styles.sideNav}>
          {NAV_RIGHT.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
