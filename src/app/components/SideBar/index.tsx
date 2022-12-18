import { ReactComponent as ArchiveSvg } from 'app/components/SideBar/assets/archive_black_24dp.svg';
import { ReactComponent as ContactsSvg } from 'app/components/SideBar/assets/contacts_black_24dp.svg';
import { ReactComponent as FaxSvg } from 'app/components/SideBar/assets/fax_black_24dp.svg';
import { ReactComponent as InboxSvg } from 'app/components/SideBar/assets/inbox_black_24dp.svg';
import { ReactComponent as OutboxSvg } from 'app/components/SideBar/assets/outbox_black_24dp.svg';
import dayjs from 'dayjs';
import { translations } from 'locales/translations';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export function SideBar() {
  const { t } = useTranslation();

  const dashboardRoutes = useMemo(
    () => [
      {
        title: t(translations.routes.inbox),
        path: '/inbox',
        icon: InboxSvg,
      },
      {
        title: t(translations.routes.sent),
        path: '/sent',
        icon: OutboxSvg,
      },
      {
        title: t(translations.routes.spam),
        path: '/spam',
        icon: ArchiveSvg,
      },
    ],
    [t],
  );

  const profileRoutes = useMemo(
    () => [
      {
        title: t(translations.routes.numbers),
        path: '/numbers',
        icon: FaxSvg,
      },
      {
        title: t(translations.routes.contacts),
        path: '/contacts',
        icon: ContactsSvg,
      },
    ],
    [t],
  );

  return (
    <Container>
      <Flex>
        <RoutesTitle>{t(translations.routes.dashboard)}</RoutesTitle>
        <Routes>
          {dashboardRoutes.map(({ title, path, icon }) => (
            <Route key={path} as={Link} to={path}>
              <Icon as={icon} />
              <span>{title}</span>
            </Route>
          ))}
        </Routes>

        <RoutesTitle>{t(translations.routes.account)}</RoutesTitle>
        <Routes>
          {profileRoutes.map(({ title, path, icon }) => (
            <Route key={path} as={Link} to={path}>
              <Icon as={icon} />
              <span>{title}</span>
            </Route>
          ))}
        </Routes>
      </Flex>

      <Footer>
        <span>© {dayjs().year()} Răzvan-Gabriel Geangu</span>
        <span>
          Made with <span title="♥️">love</span> in London
        </span>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${p => p.theme.card.background};
  border-right: 1px solid ${p => p.theme.border};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  max-height: 100vh;
  min-width: 14rem;
  padding-top: 4.0625rem;
`;

const Routes = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const Route = styled.div`
  align-content: center;
  align-items: center;
  background-color: ${p => p.theme.card.background};
  border-bottom: 1px solid ${p => p.theme.border};
  box-sizing: border-box;
  display: flex;
  padding: 0.5rem 1rem;
  width: 100%;

  &:hover {
    background-color: ${p => p.theme.background};
  }

  &:first-child {
    border-top: 1px solid ${p => p.theme.border};
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  padding: 1rem;
`;

const Flex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Icon = styled.svg`
  fill: ${p => p.theme.text};
  height: 1rem;
  margin-right: 0.25rem;
`;

const RoutesTitle = styled.span`
  font-size: 0.625rem;
  letter-spacing: 0.15rem;
  padding: 1rem;
  text-transform: uppercase;
`;
