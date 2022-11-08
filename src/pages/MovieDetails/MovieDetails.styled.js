import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Error = styled.p`
  color: ${({ theme }) => theme.errorColor};
`;

export const MovieImg = styled.img`
  width: 250px;
  height: auto;
  display: block;
  margin-right: 24px;
`;
export const BackSpan = styled.span`
  margin-left: 12px;
  color: ${({ theme }) => theme.darkGrey};
`;
export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  margin-left: 24px;
  padding: 8px 12px;
  font-weight: 500;
  margin-bottom: 12px;
  text-decoration: none;
  color: inherit;
  box-shadow: 2px 2px 4px ${({ theme }) => theme.yellow};
`;

export const MovieCard = styled.div`
  display: flex;
  padding-left: 24px;
  padding-bottom: 24px;
  box-shadow: 4px 4px 4px #454545;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 24px;
`;

export const MovieSubtitle = styled.h3`
  margin-bottom: 24px;
`;

export const MovieDesc = styled.p`
  line-height: 1.25;
`;

export const AddInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 24px;
  padding-bottom: 24px;
  box-shadow: 4px 4px 4px #454545;
`;

export const InfoLink = styled(NavLink)`
  padding: 12px;
  padding: 8px 12px;
  font-weight: 500;
  color: inherit;

  &.active {
    box-shadow: 2px 2px 4px ${({ theme }) => theme.yellow};
  }
`;
