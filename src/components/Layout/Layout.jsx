import { Container } from 'components/Container/Container.styled';
import { Outlet } from 'react-router-dom';
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
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
