import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Puff } from 'react-loader-spinner';
import { Container } from 'components/Container/Container.styled';
import { StyledLink } from '../StyledLink/StyledLink.styled';
import { Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <Container>
        <Suspense
          fallback={
            <Puff
              wrapperStyle={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
