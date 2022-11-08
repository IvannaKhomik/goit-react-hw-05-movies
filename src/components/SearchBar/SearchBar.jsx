import { Input, SearchForm, SubmitBtn } from './Searchbar.styled';

export const SearchBar = () => {
  return (
    <SearchForm>
      <Input></Input>
      <SubmitBtn type="submit">Search</SubmitBtn>
    </SearchForm>
  );
};
