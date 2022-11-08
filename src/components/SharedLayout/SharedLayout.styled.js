import { NavLink } from 'react-router-dom';
import { GiFilmStrip } from 'react-icons/gi';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: ${props => props.theme.yellow};
  background-color: ${props => props.theme.grey};
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: scale 250ms ease-out;

  &.active {
    color: ${props => props.theme.grey};
    background-color: ${props => props.theme.yellow};
  }

  &:hover {
    scale: 1.1;
  }
`;

export const Header = styled.header`
  box-shadow: 4px 4px 4px #454545;
`;

export const NavBar = styled.nav`
  padding: 24px;
`;

export const Icon = styled(GiFilmStrip)`
  margin-left: 4px;
`;
