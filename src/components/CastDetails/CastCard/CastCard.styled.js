import styled from 'styled-components';

export const CastItem = styled.li`
  width: calc((100% - 32px * 3 - 48px) / 4);
  margin-bottom: 12px;

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const CastImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const CastTitle = styled.h4`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.darkGrey};
`;

export const CastDesc = styled.p``;
