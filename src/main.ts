import { setupCounter } from "@/src/counter";
import typescriptLogo from "@/src/typescript.svg";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${import.meta.env.VITE_ASSET_URL}/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
