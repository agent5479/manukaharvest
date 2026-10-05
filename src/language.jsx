import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

function readLang() {
  try {
    return sessionStorage.getItem("mh-lang") === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ page, children }) {
  const [lang, setLangState] = useState(readLang);

  const setLang = (next) => {
    setLangState(next);
    try {
      sessionStorage.setItem("mh-lang", next);
    } catch {
      /* private mode */
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";
    document.title =
      lang === "zh"
        ? "Mānuka Harvest 麦卢卡收获 — 黄金湾野生叶茶"
        : "Mānuka Harvest — Wild leaf tea from Golden Bay";
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
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
