import { useLang } from "../language";

export default function Tea({ lead = false }) {
  const { t, site } = useLang();
  const Title = lead ? "h1" : "h2";

  return (
    <section className={`section tea${lead ? " lead-page" : ""}`} id="tea">
      <div className="tea-layout">
      <div className="section-intro">
        <p className="index">
          <span>{t.tea.index}</span>
          {t.tea.kicker}
        </p>
        <Title>{t.tea.title}</Title>
        <p className="lede">{t.tea.lede}</p>
      </div>
      <figure className="frame frame-cup">
        <img src={site.images.tips} alt={t.tea.imageAlt} />
        <figcaption>{t.tea.caption}</figcaption>
      </figure>
      </div>
      <div className="packs">
        {t.tea.packs.map((pack) => (
          <article className="pack" key={pack.weight}>
            <p className="pack-weight">{pack.weight}</p>
            <h3>{pack.name}</h3>
            <p>{pack.detail}</p>
          </article>
        ))}
        <article className="pack pack-export">
          <h3>{t.tea.exportTitle}</h3>
          <p>{t.tea.exportBody}</p>
        </article>
      </div>
      <ul className="points">
        {t.tea.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="benefits">
        <h2>{t.tea.benefitsTitle}</h2>
        <ul>
          {t.tea.benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="disclaimer">{t.heritage.disclaimer}</p>
      </div>
    </section>
  );
}
