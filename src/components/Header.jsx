import { useEffect, useState } from "react";
import { useLang } from "../language";
import Mark from "./Mark";

export default function Header() {
  const { t, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled || open ? " is-solid" : ""}`}>
      <a className="skip" href="#tea">
        Skip to the tea
      </a>
      <div className="header-inner">
        <a className="brand" href="#top" onClick={close}>
          <Mark />
          <span>
            Mānuka
            <small>Harvest</small>
          </span>
        </a>
        <nav className={open ? "is-open" : ""} aria-label="Primary">
          {t.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={close}>
            {t.contact.kicker}
          </a>
        </nav>
        <div className="header-tools">
          <button
            type="button"
            className="lang"
            onClick={() => setLang(t.otherLang)}
          >
            {t.langLabel}
          </button>
          <button
            type="button"
            className="menu"
            aria-expanded={open}
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
