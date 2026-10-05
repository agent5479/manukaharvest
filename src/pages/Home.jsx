import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { useLang } from "../language";
import { localized } from "../site";

export default function Home() {
  const { t, lang } = useLang();

  return (
    <>
      <Hero />
      <section className="section gates">
        {t.home.gates.map((gate) => (
          <Link key={gate.href} to={localized(lang, gate.href)}>
            <h2>{gate.title}</h2>
            <p>{gate.text}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
