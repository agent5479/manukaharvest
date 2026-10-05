import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { pageContent } from "./content/pageContent";
import { LanguageProvider } from "./language";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageMeta from "./components/PageMeta";
import Home from "./pages/Home";
import TeaPage from "./pages/TeaPage";
import OriginPage from "./pages/OriginPage";
import OrderPage from "./pages/OrderPage";
import ContactPage from "./pages/ContactPage";

const tree = [
  ["/", Home],
  ["/tea", TeaPage],
  ["/origin", OriginPage],
  ["/order", OrderPage],
  ["/contact", ContactPage],
  ["/zh", Home],
  ["/zh/tea", TeaPage],
  ["/zh/origin", OriginPage],
  ["/zh/order", OrderPage],
  ["/zh/contact", ContactPage],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider page={pageContent}>
      <PageMeta />
      <ScrollToTop />
      <Header />
      <main id="content">
        <Routes>
          {tree.map(([path, Page]) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          {tree.map(([path, Page]) =>
            path === "/" ? null : (
              <Route key={`${path}/`} path={`${path}/`} element={<Page />} />
            )
          )}
        </Routes>
      </main>
      <Footer />
    </LanguageProvider>
  );
}
