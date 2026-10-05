import { useLang } from "../language";

export default function Place({ lead = false }) {
  const { t, site } = useLang();
  const Title = lead ? "h1" : "h2";

  return (
    <section className={`section place${lead ? " lead-page" : ""}`} id="place">
      <div className="section-copy">
        <p className="index">
          <span>{t.place.index}</span>
          {t.place.kicker}
        </p>
        <Title>{t.place.title}</Title>
        {t.place.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <figure className="frame">
        <img src={site.images.bush} alt={t.place.imageAlt} />
        <figcaption>{t.place.caption}</figcaption>
      </figure>
    </section>
  );
}
