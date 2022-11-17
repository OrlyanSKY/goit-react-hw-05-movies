import { Form, Field } from './SearchBar.styled';

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
    <Form onSubmit={handleSubmit}>
      <Field type="text" placeholder="Enter movie name..." name="search" />
      <button type="submit">search</button>
    </Form>
  );
};
