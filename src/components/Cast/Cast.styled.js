import styled from '@emotion/styled';

export const CardList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 6px;
  justify-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Card = styled.li`
  min-height: 360px;
  min-width: 200px;
  text-align: center;
`;

export const Photo = styled.img`
  max-width: 200px;
  height: 300px;
`;

export const Thumb = styled.div`
  padding: 3px;
`;
