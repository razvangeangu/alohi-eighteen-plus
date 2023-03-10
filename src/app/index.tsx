/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import dayjs from 'dayjs';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'app/components/Layout';
import { ContactsPage } from 'app/pages/ContactsPage/Loadable';
import { InboxPage } from 'app/pages/InboxPage/Loadable';
import { NotFoundPage } from 'app/pages/NotFoundPage/Loadable';
import { NumbersPage } from 'app/pages/NumbersPage/Loadable';
import { SentPage } from 'app/pages/SentPage/Loadable';
import { SpamPage } from 'app/pages/SpamPage/Loadable';

import { translations } from 'locales/translations';
import { GlobalStyle } from 'styles/global-styles';

export function App() {
  const { i18n, t } = useTranslation();

  dayjs.locale(i18n.language);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Helmet
        titleTemplate={`%s - ${t(translations.appName)}`}
        defaultTitle={t(translations.appName)}
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content={`${t(translations.appName)} ${t(translations.description)}`}
        />
      </Helmet>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<InboxPage />} />
          <Route path="/sent" element={<SentPage />} />
          <Route path="/spam" element={<SpamPage />} />
          <Route path="/numbers" element={<NumbersPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <GlobalStyle />
    </BrowserRouter>
  );
}
