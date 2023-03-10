import styled from "styled-components";

export const CardProductsContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${props => props.theme['gray-100']};
  border-radius: 10px;
  padding: 1rem;
  gap: 0.5rem;

  > img {
      align-self: flex-start;
      width: 4rem;
      height: 4rem;
    }

  > p {
    color: ${props => props.theme['gray-600']};
    align-self: flex-end;
    font-weight: 700;
  }
`;