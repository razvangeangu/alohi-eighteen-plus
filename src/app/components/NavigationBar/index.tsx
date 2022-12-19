import { translations } from 'locales/translations';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { isSystemDark } from 'styles/theme/utils';

export function NavigationBar() {
  const { t } = useTranslation();

  return (
    <Container>
      <Logo
        alt={t(translations.appName)}
        src={`${process.env.PUBLIC_URL}/logo${isSystemDark ? '-dark' : ''}.png`}
      />
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
  justify-content: space-between;
  padding: 1rem 1.25rem;
  position: fixed;
  width: 100%;

  @supports ((-webkit-backdrop-filter: initial) or (backdrop-filter: initial)) {
    backdrop-filter: saturate(50%) blur(20px);
  }
`;

const Logo = styled.img`
  display: flex;
  height: 2rem;
`;
