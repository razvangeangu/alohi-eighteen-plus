import { translations } from 'locales/translations';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

export function ContactsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.contacts)}</title>
      </Helmet>

      <Container>Contacts Page</Container>
    </>
  );
}

const Container = styled.div``;
