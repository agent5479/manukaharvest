import { useLang } from "../language";

export default function Craft() {
  const { t, site } = useLang();

  return (
    <section className="craft" id="craft">
      <div className="section craft-intro">
        <p className="index">
          <span>{t.craft.index}</span>
          {t.craft.kicker}
        </p>
        <h2>{t.craft.title}</h2>
      </div>
      <ol className="steps">
        {t.craft.steps.map((step) => (
          <li key={step.n}>
            <span>{step.n}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <figure className="quote-band">
        <img src={site.images.ranges} alt="" />
        <blockquote>
          <p>{t.craft.quote}</p>
        </blockquote>
      </figure>
    </section>
  );
}
