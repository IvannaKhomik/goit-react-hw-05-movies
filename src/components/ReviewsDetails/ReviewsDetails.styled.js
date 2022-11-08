import styled from 'styled-components';

export const ReviewList = styled.ul`
  padding: 24px;
  color: ${({ theme }) => theme.darkGrey};
`;

export const ReviewNotFound = styled.h3`
  padding: 24px;
  margin: 0 auto;
  color: ${({ theme }) => theme.errorColor};
`;
