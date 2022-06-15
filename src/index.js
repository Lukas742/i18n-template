import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@ui5/webcomponents-react/dist/Assets";

// register loader function
import { registerI18nLoader } from "@ui5/webcomponents-base/dist/asset-registries/i18n.js";
import parse from "@ui5/webcomponents-base/dist/PropertiesFileFormat.js";
import { ThemeProvider } from "@ui5/webcomponents-react";

// note: for the default language (en) to be fetched from the "server" fetchDefaultLanguage has to be set to `true` (see index.html), otherwise custom translations for english will be missing
["en", "fr", "de", "es"].forEach((localeToRegister) => {
  registerI18nLoader("i18n-template", localeToRegister, async (localeId) => {
    const props = await (
      await fetch(`./locales/messagebundle_${localeId}.properties`)
    ).text();
    return parse(props);
  });
});

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
