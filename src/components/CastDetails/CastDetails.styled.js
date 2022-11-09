import styled from 'styled-components';

export const CastList = styled.ul`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  font-size: 14px;
`;

export const ErrorMessage = styled.h2`
  color: ${({ theme }) => theme.errorColor};
`;
