import { NavigationBar } from 'app/components/NavigationBar';
import { SideBar } from 'app/components/SideBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

export function Layout() {
  return (
    <>
      <NavigationBar />

      <Main>
        <SideBar />

        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </Main>
    </>
  );
}

const OutletContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: 5rem 1rem 1rem;
  width: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;
