import styles from "./Tastings.module.css";

type Tasting = {
  title: string;
  description: string;
  details: string;
};

const tastings: Tasting[] = [
  {
    title: "Marinuotų agurkų sesija",
    description:
      "Stiklainis po stiklainio – skirtingi marinatai, skirtingi prisiminimai. Puikiai tinka kompanijai, kuri mėgsta užkandžius lygiai taip pat kaip ir gėrimus.",
    details: "Rekomenduojama 3–6 žmonėms.",
  },
  {
    title: "Utopencų pažintis",
    description:
      "Čekiška dešrelių legenda, pritaikyta Vilniaus senamiesčiui. Actas, česnakai, prieskoniai ir daug juoko.",
    details: "Puikus starteris prieš ilgesnį vakarą.",
  },
  {
    title: "Slojikų rinkinys draugams",
    description:
      "Keli skirtingi kokteiliai slojikuose, alus iš radiatoriaus ir užkandžių rinkinys. Kad niekam nereikėtų sukti galvos.",
    details: "Galima rezervuoti iš anksto – susisiek per FB ar IG.",
  },
];

export function Tastings() {
  return (
    <section id="tastings" className={`section ${styles.tastings}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Degustacijos &amp; rinkiniai</h2>
          <p>
            Slojikai nėra tik baras &quot;ateiti po vieną bokalą&quot;. Jei norisi padaryti mažą 90&apos;ųjų vakarėlį –
            čia kelios idėjos, nuo kurių galima pradėti.
          </p>
        </div>

        <div className={styles.cards}>
          {tastings.map((t) => (
            <article key={t.title} className={styles.card}>
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <p className={styles.details}>{t.details}</p>
            </article>
          ))}
        </div>

        <p className={styles.contactHint}>
          Dėl didesnių grupių ar šventinių užsakymų – parašyk{" "}
          <a href="https://www.facebook.com/Slojikai" target="_blank" rel="noreferrer">
            Facebook
          </a>{" "}
          arba{" "}
          <a href="https://www.instagram.com/slojikai" target="_blank" rel="noreferrer">
            Instagram
          </a>
          .
        </p>
      </div>
    </section>
  );
}
