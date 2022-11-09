import styled from '@emotion/styled';

export const Card = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  > a {
    text-decoration: none;
    color: black;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: contain;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(0.98);
    cursor: pointer;
  }
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieName = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-shadow: 1px 4px 8px rgba(0, 0, 0, 0.75);
`;
