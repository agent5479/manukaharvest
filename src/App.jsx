import { useEffect, useState } from "react";
import { loadPage } from "./content/loadPage";
import { LanguageProvider } from "./language";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Place from "./components/Place";
import Tea from "./components/Tea";
import Craft from "./components/Craft";
import Heritage from "./components/Heritage";
import Brew from "./components/Brew";
import Founder from "./components/Founder";
import Order from "./components/Order";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    let live = true;
    loadPage().then((next) => {
      if (live) setPage(next);
    });
    return () => {
      live = false;
    };
  }, []);

  if (!page) {
    return (
      <div className="boot" role="status">
        Mānuka Harvest
      </div>
    );
  }

  return (
    <LanguageProvider page={page}>
      <Header />
      <main id="top">
        <Hero />
        <Place />
        <Tea />
        <Craft />
        <Heritage />
        <Brew />
        <Founder />
        <Order />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
