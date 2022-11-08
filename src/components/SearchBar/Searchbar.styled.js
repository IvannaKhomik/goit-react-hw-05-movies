import styled from 'styled-components';

export const SearchForm = styled.form`
  padding: 24px;
`;

export const Input = styled.input`
  margin-right: 16px;
  padding: 8px;
  color: ${({ theme }) => theme.darkGrey};
`;

export const SubmitBtn = styled.button`
  background-color: ${({ theme }) => theme.grey};
  color: #fff;
  padding: 10px 12px;
  border-radius: 4px;
  transition: color 250ms ease-out, background-color 250ms ease-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.darkGrey};
    background-color: ${({ theme }) => theme.yellow};
  }
`;
