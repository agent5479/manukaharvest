import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLang } from "../language";
import { absolute, localized, pageIdFromPath, pages } from "../site";

export default function PageMeta() {
  const { pathname } = useLocation();
  const { lang, t } = useLang();
  const id = pageIdFromPath(pathname);
  const seo = t.seo[id];

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.title = seo.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", seo.description);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = absolute(localized(lang, pages.find((page) => page.id === id).path));
  }, [seo, lang, id]);

  return null;
}
