import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/style.scss";
import { CookiesProvider } from "react-cookie";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import common_pl from "./translations/pl/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pl',
  resources: {
    pl: {
      common: common_pl
    },
    en: {
      common: common_en
    },
  },
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </CookiesProvider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
