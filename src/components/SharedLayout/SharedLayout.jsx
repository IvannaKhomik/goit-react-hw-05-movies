import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Icon, NavBar, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">
            Movies
            <Icon />
          </StyledLink>
        </NavBar>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
