import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('enter movie name...');
      return;
    }
    onSubmit(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter movie name..."
        name="search"
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">search</button>
    </form>
  );
};
