import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  outline: 1px solid red;
`;

export const StyledLink = styled(NavLink)`
  padding: 4px 13px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: green;
  }
`;
