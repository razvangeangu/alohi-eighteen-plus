import { translations } from 'locales/translations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

export function NavigationBar() {
  const { t } = useTranslation();

  return (
    <Container>
      <Logo>{t(translations.appName)}</Logo>
    </Container>
  );
}

const Container = styled.nav`
  align-content: center;
  align-items: center;
  background-color: ${p => p.theme.card.background};
  border-bottom: 0.0625rem solid ${p => p.theme.border};
  box-sizing: border-box;
  display: flex;
  height: 2rem;
  justify-content: space-between;
  padding: 2rem 1.25rem;
  position: fixed;
  width: 100%;

  @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
    backdrop-filter: saturate(50%) blur(20px);
  }
`;

const Logo = styled.div`
  color: ${p => p.theme.primary};
  font-size: 1.25rem;
  font-weight: 700;
`;
