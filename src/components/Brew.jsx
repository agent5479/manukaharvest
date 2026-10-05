import { useLang } from "../language";

export default function Brew() {
  const { t, site } = useLang();

  return (
    <section className="section brew" id="brew">
      <div>
        <p className="index">
          <span>{t.brew.index}</span>
          {t.brew.kicker}
        </p>
        <h2>{t.brew.title}</h2>
        <ol className="brew-steps">
          {t.brew.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <h3>{t.brew.kitchenTitle}</h3>
        <p>{t.brew.kitchen}</p>
      </div>
      <figure className="frame frame-cup">
        <img src={site.images.cup} alt={t.brew.imageAlt} />
        <figcaption>{t.brew.caption}</figcaption>
      </figure>
    </section>
  );
}
