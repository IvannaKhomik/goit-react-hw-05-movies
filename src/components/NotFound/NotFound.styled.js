import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackToMainBtn = styled.button`
  padding: 8px 12px;
  color: ${props => props.theme.yellow};
  background-color: ${props => props.theme.grey};
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 32px;
  transition: all 500ms ease-out;

  &:hover {
    scale: 1.1;
    color: ${props => props.theme.darkGrey};
    background-color: ${props => props.theme.yellow};
  }
`;

export const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;

export const ErrorImg = styled.img`
  width: 80%;
  height: auto;
  dislay: block;
`;
