import { Link } from "react-router-dom";
import { useLang } from "../language";
import { localized } from "../site";

export default function Hero() {
  const { t, site, lang } = useLang();

  return (
    <section className="hero">
      <img
        className="hero-photo"
        src={site.images.hero}
        alt={t.hero.imageAlt}
      />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="kicker">{t.hero.kicker}</p>
        <h1>{t.hero.title}</h1>
        <p className="han">{t.hero.han}</p>
        <p className="lede">{t.hero.lede}</p>
        <div className="actions">
          <Link className="btn btn-gold" to={localized(lang, "/order/")}>
            {t.hero.primary}
          </Link>
          <Link className="btn btn-ghost" to={localized(lang, "/tea/")}>
            {t.hero.secondary}
          </Link>
        </div>
      </div>
      <div className="seal" aria-hidden="true">
        {t.hero.seal.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
      <dl className="stats">
        {t.stats.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
