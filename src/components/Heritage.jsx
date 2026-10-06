import { useLang } from "../language";

export default function Heritage() {
  const { t, site } = useLang();

  return (
    <section className="section heritage" id="heritage">
      <div className="heritage-top">
        <div className="section-intro">
          <p className="index">
            <span>{t.heritage.index}</span>
            {t.heritage.kicker}
          </p>
          <h2>{t.heritage.title}</h2>
        </div>
        <figure className="frame">
          <img src={site.images.flower} alt={t.heritage.imageAlt} />
          <figcaption>{t.heritage.caption}</figcaption>
        </figure>
      </div>
      <div className="cards">
        {t.heritage.cards.map((card) => (
          <article key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
      <p className="disclaimer">{t.heritage.disclaimer}</p>
    </section>
  );
}
