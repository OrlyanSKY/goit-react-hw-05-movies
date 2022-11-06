import { Outlet } from 'react-router-dom';
import { StyledLink } from '../StyledLink/StyledLink.styled';
import { Header } from './Layout.styled';

export const Layout = () => {
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

      <Outlet />
    </>
  );
};
