import styled from "styled-components";

export const CardProductsContainer = styled.div`
  display: flex;
  width: 100%;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
  gap: 0.5rem;

  > img {
      width: 4rem;
      height: 4rem;
    }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;