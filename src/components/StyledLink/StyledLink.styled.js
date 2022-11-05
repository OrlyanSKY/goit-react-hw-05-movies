import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: red;

  &.active {
    color: green;
  }
  :hover {
    color: orange;
  }
`;
