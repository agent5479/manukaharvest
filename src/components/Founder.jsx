import { useLang } from "../language";

export default function Founder() {
  const { t, site } = useLang();

  return (
    <section className="founder" id="founder">
      <figure>
        <img src={site.images.founder} alt={t.founder.imageAlt} />
        <figcaption>{t.founder.caption}</figcaption>
      </figure>
      <div>
        <p className="index">
          <span>{t.founder.index}</span>
          {t.founder.kicker}
        </p>
        <h2>{t.founder.title}</h2>
        <p className="role">{t.founder.role}</p>
        {t.founder.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
