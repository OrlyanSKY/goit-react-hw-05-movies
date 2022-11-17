import { BiChevronsLeft } from 'react-icons/bi';

import { Button } from './BackLink.styled';
import { Link } from './BackLink.styled';

export const BackLink = ({ location }) => {
  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">
          <BiChevronsLeft />
          Go back
        </Button>
      </Link>
    </>
  );
};
