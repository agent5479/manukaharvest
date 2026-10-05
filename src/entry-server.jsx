import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { BASE } from "./site";
export { pageContent } from "./content/pageContent";

export function render(url) {
  return renderToString(
    <MemoryRouter initialEntries={[url]} basename={BASE}>
      <App />
    </MemoryRouter>
  );
}
