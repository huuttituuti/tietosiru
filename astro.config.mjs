// @ts-check
import { defineConfig } from "astro/config";
import PinyAstro from "@pinegrow/piny-astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["fi", "sv", "en"],
    defaultLocale: "fi",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [PinyAstro()],
});
