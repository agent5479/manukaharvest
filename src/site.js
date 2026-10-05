export const ORIGIN = "https://agent5479.github.io";
export const BASE = "/manukaharvest";

export const pages = [
  { id: "home", path: "/", priority: "1.0" },
  { id: "tea", path: "/tea/", priority: "0.9" },
  { id: "origin", path: "/origin/", priority: "0.8" },
  { id: "order", path: "/order/", priority: "0.8" },
  { id: "contact", path: "/contact/", priority: "0.7" },
];

export function zhPath(path) {
  if (path === "/") return "/zh/";
  return `/zh${path}`;
}

export function localized(lang, path) {
  return lang === "zh" ? zhPath(path) : path;
}

export function langFromPath(pathname) {
  const path = pathname || "/";
  return path === "/zh" || path.startsWith("/zh/") ? "zh" : "en";
}

export function pageIdFromPath(pathname) {
  const trimmed = (pathname || "/").replace(/\/$/, "") || "/";
  const bare = trimmed.replace(/^\/zh$/, "").replace(/^\/zh\//, "/") || "/";
  if (bare === "/") return "home";
  const id = bare.slice(1).split("/")[0];
  return pages.some((page) => page.id === id) ? id : "home";
}

export function absolute(path) {
  const suffix = path === "/" ? "/" : path;
  return `${ORIGIN}${BASE}${suffix}`;
}
