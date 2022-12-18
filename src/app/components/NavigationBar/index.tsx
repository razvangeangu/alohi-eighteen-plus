import { translations } from 'locales/translations';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';

export function NavigationBar() {
  const { t } = useTranslation();

  const location = useLocation();

  const routes = useMemo(
    () => [
      {
        path: '/',
        name: t(translations.routes.home),
      },
    ],
    [t],
  );

  return (
    <Container>
      <Logo>{t(translations.appName)}</Logo>

      <Routes>
        {routes.map(route => (
          <StyledLink
            key={route.path}
            to={route.path}
            selected={location.pathname === route.path}
          >
            {route.name}
          </StyledLink>
        ))}
      </Routes>
    </Container>
  );
}

const Container = styled.nav`
  align-content: center;
  align-items: center;
  background-color: ${p => p.theme.background};
  border: 0.0625rem solid ${p => p.theme.border};
  box-sizing: border-box;
  display: flex;
  height: 2rem;
  justify-content: space-between;
  position: fixed;
  width: 100%;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Routes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)<{ selected: boolean }>`
  font-weight: ${p => (p.selected ? 700 : 400)};
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 1.25rem;
  }
`;
