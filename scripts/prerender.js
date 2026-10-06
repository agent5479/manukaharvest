import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { BASE, absolute, localized, pages } from "../src/site.js";

const root = resolve(".");
const dist = resolve(root, "dist");
const template = readFileSync(resolve(dist, "index.html"), "utf8");
const serverUrl = pathToFileURL(resolve(root, ".ssr/entry-server.js")).href;
const { render, pageContent } = await import(serverUrl);

const lastmod = "2026-10-06";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function outputFile(path) {
  if (path === "/") return resolve(dist, "index.html");
  return resolve(dist, path.replace(/^\//, "").replace(/\/$/, ""), "index.html");
}

function headTags({ title, description, canonical, enUrl, zhUrl, image }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Manuka Harvest Limited",
    url: absolute("/"),
    email: "enquiries@manukaharvest.co.nz",
    telephone: "+64 21 083 4794",
    address: {
      "@type": "PostalAddress",
      streetAddress: "17 Rangihaeata Road, RD 2",
      addressLocality: "Tākaka",
      postalCode: "7182",
      addressCountry: "NZ",
    },
  };

  return `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="en" href="${enUrl}" />
    <link rel="alternate" hreflang="zh-Hans" href="${zhUrl}" />
    <link rel="alternate" hreflang="x-default" href="${enUrl}" />
    <link rel="sitemap" type="application/xml" href="${absolute("/sitemap.xml")}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="${canonical.includes("/zh/") ? "zh_CN" : "en_NZ"}" />
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  `;
}

for (const page of pages) {
  for (const lang of ["en", "zh"]) {
    const path = localized(lang, page.path);
    const seo = pageContent[lang].seo[page.id];
    const location = `${BASE}${path}`;
    const hoists = [];
    const markup = render(location).replace(/<link\b[^>]*rel="preload"[^>]*>/g, (tag) => {
      hoists.push(tag);
      return "";
    });
    if (!markup.includes("<h1")) {
      throw new Error(`Prerender for ${location} did not include a heading`);
    }
    const enUrl = absolute(page.path);
    const zhUrl = absolute(localized("zh", page.path));
    const canonical = lang === "zh" ? zhUrl : enUrl;
    const tags = headTags({
      title: seo.title,
      description: seo.description,
      canonical,
      enUrl,
      zhUrl,
      image: absolute("/images/steep.jpg"),
    });
    let html = template
      .replace(/<title>[\s\S]*?<\/title>/, "")
      .replace(/<meta\s+name="description"[\s\S]*?>/, "")
      .replace("<html lang=\"en\">", `<html lang="${lang === "zh" ? "zh-Hans" : "en"}">`)
      .replace("</head>", `${hoists.join("\n    ")}\n${tags}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    const file = outputFile(path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    console.log("prerendered", path);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .flatMap((page) => {
    const en = absolute(page.path);
    const zh = absolute(localized("zh", page.path));
    return [en, zh].map((loc) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="zh-Hans" href="${zh}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${en}" />
  </url>`);
  })
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${absolute("/sitemap.xml")}
`;

const llms = `# Mānuka Harvest

> Wild-grown mānuka leaf tea from Golden Bay, New Zealand. Hand-harvested, dried, and packed in small batches in Tākaka, and supplied mainly to China.

Mānuka Harvest Limited packs loose-leaf herbal tea from wild Leptospermum scoparium. The leaf is caffeine-free, with nothing added. Retail bags are 25g and 60g. Export formats are arranged from the packing room. Traditionally the infusion was taken for seasonal colds and fever, digestion, and urinary discomfort, and the fresh leaf was used on the skin. Laboratory research has examined antibacterial and antioxidant activity in the leaf and its oil. The tea is sold as a food, not as a medicine.

## Pages

- [Home](${absolute("/")}): The house, the cup, and where to go next.
- [The tea](${absolute("/tea/")}): Flavour, traditional uses, bags, and brewing.
- [Origin](${absolute("/origin/")}): The trees, the harvest, the medicinal uses of the leaf, and Julian Hall.
- [Order](${absolute("/order/")}): Wholesale supply for China and New Zealand shops.
- [Contact](${absolute("/contact/")}): The packing room in Tākaka.

## 中文

- [首页](${absolute("/zh/")}): 黄金湾野生麦卢卡叶茶。
- [茶品](${absolute("/zh/tea/")}): 风味、规格与冲泡。
- [产地](${absolute("/zh/origin/")}): 塔卡卡、采收、传承与创始人。
- [订购](${absolute("/zh/order/")}): 面向中国的出口供货。
- [联络](${absolute("/zh/contact/")}): 塔卡卡包装间。
`;

writeFileSync(resolve(dist, "sitemap.xml"), sitemap);
writeFileSync(resolve(dist, "robots.txt"), robots);
writeFileSync(resolve(dist, "llms.txt"), llms);
rmSync(resolve(root, ".ssr"), { recursive: true, force: true });
console.log("wrote sitemap, robots.txt, llms.txt");
