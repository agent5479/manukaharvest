import { useLang } from "../language";

export default function Place() {
  const { t, site } = useLang();

  return (
    <section className="section place" id="place">
      <div className="section-copy">
        <p className="index">
          <span>{t.place.index}</span>
          {t.place.kicker}
        </p>
        <h2>{t.place.title}</h2>
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
