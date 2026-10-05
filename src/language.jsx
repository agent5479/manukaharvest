import { createContext, useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { langFromPath } from "./site";

const LanguageContext = createContext(null);

export function LanguageProvider({ page, children }) {
  const { pathname } = useLocation();
  const lang = langFromPath(pathname);
  const value = useMemo(
    () => ({
      lang,
      t: page[lang],
      site: page.site,
    }),
    [lang, page]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLang must be used inside LanguageProvider");
  }
  return value;
}
