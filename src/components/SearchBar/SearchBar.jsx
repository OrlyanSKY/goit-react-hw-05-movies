export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const query = form.elements.search.value;

    if (query === '') {
      alert('enter movie name...');
      return;
    }
    onSubmit(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter movie name..." name="search" />
      <button type="submit">search</button>
    </form>
  );
};
