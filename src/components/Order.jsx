import { Link } from "react-router-dom";
import { useLang } from "../language";
import { localized } from "../site";

export default function Order({ lead = false }) {
  const { t, lang } = useLang();
  const Title = lead ? "h1" : "h2";

  return (
    <section className={`section order${lead ? " lead-page" : ""}`} id="order">
      <div className="section-intro">
        <p className="index">
          <span>{t.order.index}</span>
          {t.order.kicker}
        </p>
        <Title>{t.order.title}</Title>
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
        <Link className="btn btn-forest" to={localized(lang, "/contact/")}>
          {t.contact.submit}
        </Link>
      </div>
    </section>
  );
}
