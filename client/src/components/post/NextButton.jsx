import { styled } from 'styled-components';

export const NextButton = styled.button`
  width: fit-content;
  height: 40px;
  padding: 10px;
  background-color: #0a95ff;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0074cc;
  }
  &.disabled {
    background-color: #84caff;
    pointer-events: none;
  }
`;
