import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: block;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px -1px 33px 4px rgba(0, 0, 0, 0.35);
  @media (min-width: 755px) {
    display: grid;
    grid-template-columns: 280px 1fr;
  }
`;
export const Poster = styled.div`
  max-width: 320px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 20px;
  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.71);
`;

export const Overview = styled.p`
  font-style: italic;
`;

export const Genre = styled.span`
  background-color: orangered;
  padding: 3px 5px;
  border-radius: 5px;
  color: white;
  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.71);
  :not(:last-child) {
    margin-right: 10px;
  }
`;
