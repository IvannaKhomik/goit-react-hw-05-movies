import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieName = styled.li`
  padding: 8px;
  margin-bottom: 12px;
`;

export const StyledLink = styled(NavLink)`
  color: inherit;

  &.active {
    color: #4a235a;
  }
`;
