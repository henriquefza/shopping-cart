import styled from "styled-components";

export const CardPaymentContainer = styled.div`

  width: 100%;
  display: grid;
  grid-template-columns: 11.25rem 4rem 12rem;
  column-gap: 1.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  margin-bottom: 40px;

    input { 
    
    height: 3.625rem;
    border-radius: 4px; 
    border: 1px solid ${props => props.theme['gray-400']};
    background: ${props => props.theme['gray-100']};
    transition: 0.5s;

    color: ${props => props.theme['gray-600']};
    font-size: 1.5rem;
    padding: 0 0.75rem;

    &::placeholder {
     color: ${props => props.theme['gray-400']}
    }
  }

  .cardNumber {
    grid-column: span 3;
  }

  .cardHolder { 
    grid-column: span 3;
  }

  .expirationDate { 
    grid-column: span 2;
    max-width: 17.25rem;
  }

  .securityCode { 
    grid-column: span 1;
    max-width: 12rem;
  }

`;