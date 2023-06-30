import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  display: flex;
`;
export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding-bottom: 6px;
  margin: 10px;
  :hover {
    transition: text-shadow 250ms linear;
    text-shadow: 1px 1px 2px black;
  }
  &.active {
    text-shadow: 1px 1px 2px black;
    border-bottom: 1px solid #1cb6cd;
  }
`;