import { useLang } from "../language";

export default function Order() {
  const { t } = useLang();

  return (
    <section className="section order" id="order">
      <div className="section-intro">
        <p className="index">
          <span>{t.order.index}</span>
          {t.order.kicker}
        </p>
        <h2>{t.order.title}</h2>
        <p className="lede">{t.order.lede}</p>
      </div>
      <div className="paths">
        {t.order.paths.map((path) => (
          <article key={path.title}>
            <h3>{path.title}</h3>
            <p>{path.text}</p>
          </article>
        ))}
      </div>
      <div className="next">
        <h3>{t.order.stepsTitle}</h3>
        <ol>
          {t.order.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <a className="btn btn-forest" href="#contact">
          {t.hero.primary}
        </a>
      </div>
    </section>
  );
}
