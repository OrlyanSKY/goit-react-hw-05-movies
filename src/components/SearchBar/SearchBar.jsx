import { Form, Field, SubmitBtn } from './SearchBar.styled';
import PropTypes from 'prop-types';

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
      <div>
        <Field type="text" placeholder="Enter movie name..." name="search" />
        <SubmitBtn type="submit">search</SubmitBtn>
      </div>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
