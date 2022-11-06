import { GridItems } from 'components/GridItems/GridItems';

import { Grid } from './Grid.styled';

export const StyledGrid = ({ items }) => {
  return (
    <Grid>
      <GridItems items={items} />
    </Grid>
  );
};
