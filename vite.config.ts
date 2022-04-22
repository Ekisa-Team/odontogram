import { svelte } from "@sveltejs/vite-plugin-svelte";
import {
  extractorSvelte,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      extractors: [extractorSvelte],
      transformers: [transformerDirectives(), transformerVariantGroup()],
      presets: [
        presetIcons({
          prefix: "i-",
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
          scale: 1.2,
        }),
        presetUno(),
        presetAttributify({
          prefix: "u-",
          prefixedOnly: true,
          strict: true,
        }),
      ],
    }),
    svelte(),
  ],
});
