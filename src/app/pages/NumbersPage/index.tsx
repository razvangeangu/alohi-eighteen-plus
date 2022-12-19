import { UnderConstruction } from 'app/components/UnderConstruction';
import { translations } from 'locales/translations';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

export function NumbersPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t(translations.routes.numbers)}</title>
      </Helmet>

      <Container>
        <UnderConstruction />
      </Container>
    </>
  );
}

const Container = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;
