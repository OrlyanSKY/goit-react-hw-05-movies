import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;
export const Field = styled.input`
  margin: 0;
  margin-left: 0;
  padding: 10px;
  outline: none;
`;

export const SubmitBtn = styled.button`
  transition: all 250ms linear;
  padding: 11px 5px;
  background-color: white;
  border: 0.3px solid black;
  border-left: transparent;
  outline: none;

  cursor: pointer;
  :hover {
    background-color: orangered;
    color: white;
    border-color: orangered;
  }
`;
