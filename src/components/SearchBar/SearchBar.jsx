import { useState } from 'react';
import { Input, SearchForm, SubmitBtn } from './Searchbar.styled';
import toast from 'react-hot-toast';

export const SearchBar = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const onInputChange = e => {
    const { value } = e.currentTarget;
    setQuery(value.toLowerCase());
  };

  const onSubmitBtn = e => {
    e.preventDefault();
    if (query === '') {
      return toast.error('Please, type the title of movie you want to find');
    }
    setSearchParams({ query });
    setQuery('');
  };

  return (
    <SearchForm onSubmit={onSubmitBtn}>
      <Input
        onChange={onInputChange}
        value={query}
        type="text"
        autocomplete="off"
        placeholder="Search film"
      ></Input>
      <SubmitBtn type="submit">Search</SubmitBtn>
    </SearchForm>
  );
};
