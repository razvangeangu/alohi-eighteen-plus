/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import FontFaceObserver from 'fontfaceobserver';
import React from 'react';
import ReactDOMClient from 'react-dom/client';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from 'styles/theme/ThemeProvider';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';

// Observe loading of custom-font (to remove 'custom-font', remove the <link> tag in
// the index.html file and this observer)
const customFontObserver = new FontFaceObserver('Nunito Sans', {});

// When custom-font is loaded, add a font-family using custom-font to the body
customFontObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(MOUNT_NODE!).render(
  <ThemeProvider>
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  </ThemeProvider>,
);

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
