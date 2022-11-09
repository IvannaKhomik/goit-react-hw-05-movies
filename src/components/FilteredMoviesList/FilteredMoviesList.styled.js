import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  margin-left: 24px;
  padding: 0 24px;
`;

export const Error = styled.h2`
  color: ${({ theme }) => theme.errorColor};
`;

export const MovieName = styled.li`
  padding: 8px;
  margin-bottom: 12px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  }
`;

export const NoResultCard = styled.h3`
  padding-left: 24px;
  color: ${({ theme }) => theme.darkGrey};
`;
