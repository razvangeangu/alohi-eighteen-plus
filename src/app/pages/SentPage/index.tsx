import { translations } from 'locales/translations';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

export function SentPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.sent)}</title>
      </Helmet>

      <Container>Sent Page</Container>
    </>
  );
}

const Container = styled.div``;
