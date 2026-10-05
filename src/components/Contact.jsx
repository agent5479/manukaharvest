import { useState } from "react";
import { useLang } from "../language";

export default function Contact({ lead = false }) {
  const { t, site, lang } = useLang();
  const fields = t.contact.fields;
  const [sent, setSent] = useState(false);
  const Title = lead ? "h1" : "h2";

  const onSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className={`section contact${lead ? " lead-page" : ""}`} id="contact">
      <div>
        <p className="index">
          <span>{t.contact.index}</span>
          {t.contact.kicker}
        </p>
        <Title>{t.contact.title}</Title>
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
      {sent ? (
        <div className="sent" role="status">
          <h3>{t.contact.successTitle}</h3>
          <p>{t.contact.success}</p>
        </div>
      ) : (
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
      </form>
      )}
    </section>
  );
}
