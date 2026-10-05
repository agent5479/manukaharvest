import Craft from "../components/Craft";
import Founder from "../components/Founder";
import Heritage from "../components/Heritage";
import Place from "../components/Place";

export default function OriginPage() {
  return (
    <article>
      <Place lead />
      <Craft />
      <Heritage />
      <Founder />
    </article>
  );
}
