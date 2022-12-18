import { translations } from 'locales/translations';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.home)}</title>
      </Helmet>

      <Container>Hello world</Container>
    </>
  );
}

const Container = styled.div``;
