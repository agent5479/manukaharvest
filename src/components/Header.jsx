import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLang } from "../language";
import { langFromPath, localized } from "../site";
import Mark from "./Mark";

function otherLanguagePath(pathname) {
  const zh = langFromPath(pathname) === "zh";
  const bare = pathname.replace(/\/$/, "") || "/";
  if (zh) {
    const rest = bare.replace(/^\/zh/, "") || "/";
    return rest === "/" ? "/" : `${rest}/`;
  }
  if (bare === "/") return "/zh/";
  return `/zh${bare}/`;
}

export default function Header() {
  const { t, lang } = useLang();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pageIsHome(pathname);

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
  const solid = !onHome || scrolled || open;

  return (
    <header className={`site-header${solid ? " is-solid" : ""}`}>
      <a className="skip" href="#content">
        {t.skip}
      </a>
      <div className="header-inner">
        <Link className="brand" to={localized(lang, "/")} onClick={close}>
          <Mark />
          <span>
            Mānuka
            <small>Harvest</small>
          </span>
        </Link>
        <nav className={open ? "is-open" : ""} aria-label="Primary">
          {t.nav.map((item) => (
            <NavLink key={item.href} to={localized(lang, item.href)} onClick={close}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-tools">
          <Link className="lang" to={otherLanguagePath(pathname)} onClick={close}>
            {t.langLabel}
          </Link>
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

function pageIsHome(pathname) {
  const path = pathname.replace(/\/$/, "") || "/";
  return path === "/" || path === "/zh";
}
