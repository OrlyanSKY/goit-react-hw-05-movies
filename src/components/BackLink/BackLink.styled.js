import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 5px 8px;
  margin: 5px 0;
  background-color: orangered;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
  :hover {
    color: black;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
