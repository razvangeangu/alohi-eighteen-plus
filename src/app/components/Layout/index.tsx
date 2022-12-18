import { NavigationBar } from 'app/components/NavigationBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components/macro';

export function Layout() {
  return (
    <>
      <NavigationBar />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </>
  );
}

const OutletContainer = styled.div`
  padding-top: 2rem;
`;
