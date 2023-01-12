import styled from "styled-components";

export const CardValuesContainer = styled.div`

  width: 100%;
  display: grid;
  grid-template-columns: 17rem  12rem;
  column-gap: 1.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  margin-top: 40px;
  

  p {
      font-size: 1.5rem; 
      
  }

.price { 
  text-align: right;
}
`;