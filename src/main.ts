import "@unocss/reset/sanitize/assets.css";
import "@unocss/reset/sanitize/forms.css";
import "@unocss/reset/sanitize/reduce-motion.css";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/tailwind.css";
import "uno.css";
import App from "./App.svelte";


const app = new App({
  target: document.getElementById("app"),
});

export default app;
