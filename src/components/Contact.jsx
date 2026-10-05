import { useLang } from "../language";

export default function Contact() {
  const { t, site, lang } = useLang();
  const fields = t.contact.fields;

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines = [...data.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      t.contact.subject
    )}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
  };

  return (
    <section className="section contact" id="contact">
      <div>
        <p className="index">
          <span>{t.contact.index}</span>
          {t.contact.kicker}
        </p>
        <h2>{t.contact.title}</h2>
        <p className="lede">{t.contact.lede}</p>
        <div className="address-block">
          <h3>{t.contact.addressTitle}</h3>
          <address>
            {t.contact.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a href={site.mapHref} target="_blank" rel="noreferrer">
            {t.contact.visit}
          </a>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <form key={lang} onSubmit={onSubmit}>
        <label>
          {fields.name}
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          {fields.company}
          <input name="company" autoComplete="organization" />
        </label>
        <div className="split">
          <label>
            {fields.city}
            <input name="city" required autoComplete="address-level2" />
          </label>
          <label>
            {fields.country}
            <input name="country" defaultValue={lang === "zh" ? "中国" : "China"} autoComplete="country-name" />
          </label>
        </div>
        <label>
          {fields.email}
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          {fields.wechat}
          <span className="opt">{t.contact.optional}</span>
          <input name="wechat" autoComplete="off" />
        </label>
        <label>
          {fields.interest}
          <select name="interest" defaultValue={t.contact.interests[0]}>
            {t.contact.interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>
        <label>
          {fields.message}
          <textarea name="message" rows="5" required />
        </label>
        <button className="btn btn-gold" type="submit">
          {t.contact.submit}
        </button>
        <p className="hint">{t.contact.hint}</p>
      </form>
    </section>
  );
}
