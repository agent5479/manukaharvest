import { useLang } from "../language";
import Mark from "./Mark";

export default function Footer() {
  const { t, site } = useLang();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Mark />
        <div>
          <strong>{site.brand}</strong>
          <p>{t.footer.line}</p>
        </div>
      </div>
      <div>
        <p>
          {site.legalName}
          <br />
          {t.footer.holding}: {site.holding}
          <br />
          {site.director}
          <br />
          {site.incorporated}
        </p>
      </div>
      <div>
        <p>
          NZBN {site.nzbn}
          <br />
          {site.companyNumber}
          <br />
          {site.phoneDisplay}
          <br />
          {site.email}
        </p>
      </div>
      <p className="rights">
        © {new Date().getFullYear()} {t.footer.rights}
      </p>
    </footer>
  );
}
