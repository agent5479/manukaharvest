import { useLang } from "../language";

export default function Tea() {
  const { t } = useLang();

  return (
    <section className="section tea" id="tea">
      <div className="section-intro">
        <p className="index">
          <span>{t.tea.index}</span>
          {t.tea.kicker}
        </p>
        <h2>{t.tea.title}</h2>
        <p className="lede">{t.tea.lede}</p>
      </div>
      <div className="packs">
        {t.tea.packs.map((pack) => (
          <article className="pack" key={pack.weight}>
            <div className="pouch" aria-hidden="true">
              <span>Mānuka</span>
              <strong>{pack.weight}</strong>
              <em>Harvest</em>
            </div>
            <h3>{pack.name}</h3>
            <p>{pack.detail}</p>
          </article>
        ))}
        <article className="pack pack-export">
          <h3>{t.tea.exportTitle}</h3>
          <p>{t.tea.exportBody}</p>
        </article>
      </div>
      <p className="stand-in">{t.tea.note}</p>
      <ul className="points">
        {t.tea.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
