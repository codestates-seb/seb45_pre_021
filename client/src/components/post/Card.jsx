import { styled } from 'styled-components';

export const Card = styled.div`
  width: 350px;
  height: 165px;
  background-color: #ffffff;
  border: 1px solid #e3e6e8;
  border-radius: 5px;
  box-shadow: 0 2px 4px #aaaaaa;
  .card-title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    background-color: #f8f9f9;
    border-bottom: 1px solid #e3e6e8;
  }
  .card-content {
    display: flex;
    padding: 1rem;
    flex-direction: row;
    gap: 0.5rem;
    img {
      width: 50px;
      height: 50px;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
