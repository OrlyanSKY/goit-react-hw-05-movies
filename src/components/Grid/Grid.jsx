import PropTypes from 'prop-types';

import { Grid } from './Grid.styled';
import { GridItems } from 'components/GridItems/GridItems';

export const StyledGrid = ({ items }) => {
  return (
    <Grid>
      <GridItems items={items} />
    </Grid>
  );
};

StyledGrid.propTypes = {
  items: PropTypes.array,
};
